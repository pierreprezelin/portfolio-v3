import adapter from "@sveltejs/adapter-cloudflare";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { escapeSvelte, type MdsvexOptions, mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { getSingletonHighlighter } from "shiki";
import { defineConfig } from "vite";

const mdsvexOptions: MdsvexOptions = {
	extensions: [".svx", ".md"],
	highlight: {
		highlighter: async (code, lang) => {
			lang ??= "text";
			const highlighter = await getSingletonHighlighter({
				themes: ["gruvbox-dark-medium"],
				langs: [lang]
			});
			const html = escapeSvelte(
				highlighter.codeToHtml(code, { lang, theme: "gruvbox-dark-medium" })
			);

			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [relativeImages],
	// @ts-expect-error mdsvex 0.12 types its plugins against unified v9, rehype plugins use unified v11
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
};

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: [".svelte", ".svx", ".md"],
			preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
			adapter: adapter({
				config: undefined,
				platformProxy: {
					configPath: undefined,
					environment: undefined,
					persist: undefined
				},
				fallback: "plaintext",
				routes: { include: ["/*"], exclude: ["<all>"] }
			})
		}),
		enhancedImages(),
		tailwindcss(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["url", "cookie", "baseLocale"]
		})
	]
});
