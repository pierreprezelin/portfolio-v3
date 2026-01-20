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
		{@render children()}
	</main>
	<Footer />
</div>


<style>
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
		background-color: var(--color-pp-beige);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'ITC Souvenir Std';
	}

	:global(h1) {
		font-size: var(--text-4xl);
	}
	
	:global(pre, code) {
		font-family: 'JetBrains Mono Variable', monospace;
	}
</style>
