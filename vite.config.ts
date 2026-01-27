import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
	plugins: [
		sveltekit(),
		enhancedImages(),
		tailwindcss(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	]
});
