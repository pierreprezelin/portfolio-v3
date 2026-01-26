<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ModeWatcher } from 'mode-watcher';

	import { afterNavigate, disableScrollHandling } from '$app/navigation';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MouseCursor from '$lib/components/MouseCursor.svelte';
	import Pattern from '$lib/components/Pattern.svelte';

	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import image from '$lib/assets/images/og-image.webp';

	import '@fontsource-variable/libre-franklin/wght.css';
	import '$lib/styles/fonts.css';

	const title = 'Pierre Prézelin · Front-end Developer & UI Designer';
	const description =
		'Front-end Developer and UI Designer from France, currently based in Montréal, QC, Canada.';

	afterNavigate(() => {
		disableScrollHandling(); // Fix unwanted scroll back to top while page is fading away
	});

	let { children, data } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Pierre, Prézelin, portfolio, blog, france, front-end, developer, dev, development, ui, ux, webdesign"
	/>

	<meta name="og:site_name" content="Pierre Prézelin" />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:image" content={image} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@prezelin21995" />
	<meta name="twitter:creator" content="@prezelin21995" />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<link rel="icon" href={favicon} />
</svelte:head>

<MouseCursor />
<ModeWatcher />

<div class="layout">
	<Header />
	{#key data.currentRoute}
		<div
			class="flex min-h-dvh flex-col"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
		>
			<main class="container mx-auto grow">
				<Pattern position="top" />
				{@render children()}
			</main>
			<Footer />
		</div>
	{/key}
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
		letter-spacing: 0.02em;
		line-height: 1.6;
		background-color: var(--color-pp-beige);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'ITC Souvenir Std';
	}

	:global(h1, .h1) {
		font-size: var(--text-5xl);
		line-height: var(--leading-tight);
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

	.btn:hover {
		svg {
			color: var(--text-pp-beige);
		}
	}
</style>
