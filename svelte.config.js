import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { getSingletonHighlighter } from 'shiki';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	highlight: {
		highlighter: async (code, lang) => {
			const highlighter = await getSingletonHighlighter({ themes: ["gruvbox-dark-hard"], langs: [lang] })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang: lang, theme: "gruvbox-dark-hard" }))
			return `{@html \`${html}\`}`
		}
	},
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex(mdsvexOptions),
		vitePreprocess()
	],
	kit: {
		adapter: adapter({
			config: undefined,
			platformProxy: {
				configPath: undefined,
				environment: undefined,
				persist: undefined
			},
			fallback: 'plaintext',
			routes: { include: ['/*'], exclude: ['<all>'] }
		})
	}
};

export default config;
