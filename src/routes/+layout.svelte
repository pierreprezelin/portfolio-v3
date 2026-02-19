<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	import { ModeWatcher } from 'mode-watcher';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MouseCursor from '$lib/components/MouseCursor.svelte';
	import Pattern from '$lib/components/Pattern.svelte';

	import './layout.css';

	import '@fontsource-variable/libre-franklin/wght.css';
	import '$lib/styles/fonts.css';

	const duration = 150;
	const delay = duration + duration / 2;
	const y = 5;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	afterNavigate(() => {
		disableScrollHandling(); // Fix unwanted scroll back to top while page is fading away
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 150);
	});

	let { data, children } = $props();
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
</script>

<MetaTags {...metaTags} />

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

{#if browser}
	<script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
{/if}

<MouseCursor />
<ModeWatcher />

<div class="layout">
	<Header />
	{#key data.pathname}
		<div class="flex min-h-dvh flex-col" in:fly={transitionIn} out:fly={transitionOut}>
			<main class="container mx-auto grow">
				<Pattern position="top" />
				{@render children()}
			</main>
			<Footer />
		</div>
	{/key}
</div>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>

<style lang="scss">
	:global(html, body) {
		width: 100%;
		min-height: 100svh;
		margin: 0;
		padding: 0;
	}

	:global(html) {
		scrollbar-color: var(--color-pp-black) var(--color-pp-beige);
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

	:global(.btn:hover svg) {
		color: var(--text-pp-beige);
	}
</style>
