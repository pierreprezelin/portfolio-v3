<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MouseCursor from '$lib/components/MouseCursor.svelte';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import '@fontsource-variable/libre-franklin/wght.css';
	import '$lib/css/fonts.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Pierre Prézelin · Portfolio</title>
	<link rel="icon" href={favicon} />
	<link
		rel="preload"
		as="font"
		href="/fonts/itc-souvenir-std-light.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/itc-souvenir-std-medium.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<MouseCursor />
<ModeWatcher />

<div class="layout">
	<Header />
	<main class="container mx-auto">
		<div class="patterns flex justify-center mb-20">
			<span class="pattern bg-pp-blue first:rounded-bl-md"></span>
			<span class="pattern bg-pp-brown"></span>
			<span class="pattern bg-pp-yellow"></span>
			<span class="pattern bg-pp-red last:rounded-br-md"></span>
		</div>
		{@render children()}
	</main>
	<Footer />
</div>

<style lang="scss">
	:global(html, body) {
		width: 100%;
		min-height: 100svh;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		color: var(--color-pp-black);
		font-family: 'Libre Franklin Variable', sans-serif;
		font-weight: 400;
		letter-spacing: .02em;
		line-height: 1.6;
		background-color: var(--color-pp-beige);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'ITC Souvenir Std';
	}

	:global(h1, .h1) {
		font-size: var(--text-5xl);
	}
	:global(h2, .h2) {
		font-size: var(--text-4xl);
	}
	:global(h3, .h3) {
		font-size: var(--text-3xl);
	}
	:global(h4, .h4) {
		font-size: var(--text-2xl);
	}
	:global(h5, .h5) {
		font-size: var(--text-xl);
	}
	:global(h6, .h6) {
		font-size: var(--text-lg);
	}

	:global(pre, code) {
		font-family: 'JetBrains Mono Variable', monospace;
	}
	
	:global(p > a) {
		font-weight: 600;
		text-decoration: underline;
		text-decoration: underline 1px var(--color-pp-black);
		transition: text-decoration var(--default-transition-duration)
			var(--default-transition-timing-function);
	}
	:global(p > a:hover) {
		text-decoration-color: transparent;
	}

	:global(.container) {
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	.pattern {
		width: 1.25rem;
		height: 8.25rem;
	}
</style>
