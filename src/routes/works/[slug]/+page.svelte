<script lang="ts">
	import '$lib/styles/prose.scss';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} · Works · Pierre Prézelin</title>
</svelte:head>

<article>
	<hgroup>
		<div class="flex flex-col tablet:flex-row tablet:items-baseline justify-between gap-4 tablet:gap-2.5 mb-2.5 tablet:mb-0">
			<div class="flex flex-col tablet:flex-row tablet:items-baseline gap-2 tablet:gap-4 tablet:pb-0.5">
				<h1>{data.meta.title}</h1>
				<span class="h6 -translate-y-0.5 font-serif">{data.meta.date}</span>
			</div>
			{#if data.meta.logo}
				<a href={data.meta.slug} title={m.go_to_website()} aria-label={m.go_to_website()} target="_blank" class="mb-2.5">
					<enhanced:img src={`/images/works/logos/${data.meta.logo}`} alt="" class="max-w-52 h-12" />
				</a>
			{/if}
		</div>
		{#if data.meta.skills}
			<div class="my-1">{data.meta.skills.join(' · ')}</div>
		{/if}
		{#if data.meta.tools}
			<div class="text-pp-black/60 italic">{data.meta.tools.join(', ')}</div>
		{/if}
	</hgroup>
	<div class="mt-10">
		{#if data.meta.banner}
			<figure class="mx-auto mb-10 h-full w-full max-w-200">
				<enhanced:img
					src={`/images/works/${data.meta.banner}`}
					alt=""
					class="rounded-xl border border-pp-black object-cover"
				/>
				{#if data.meta.caption}
					<figcaption class="mt-5 text-center text-pp-black/60 italic">
						{data.meta.caption}
					</figcaption>
				{/if}
			</figure>
		{/if}
		<div class="prose max-w-none">
			<data.content />
		</div>
	</div>
</article>

<a href={localizeHref('/works', { locale: getLocale() })} class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	{m.back_to_works()}
</a>
