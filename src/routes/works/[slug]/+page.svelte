<script lang="ts">
	import '$lib/styles/prose.scss';

	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} · Works · Pierre Prézelin</title>
</svelte:head>

<article>
	<hgroup>
		<div class="flex items-center justify-between gap-2.5">
			<div class="flex items-baseline gap-4">
				<h1>{data.meta.title}</h1>
				<span class="h6 -translate-y-0.5 pb-2 font-serif">{data.meta.date}</span>
			</div>
			{#if data.meta.logo}
				<a href={data.meta.slug} title="Go to website" aria-label="Go to website" target="_blank">
					<enhanced:img src={`/images/works/logos/${data.meta.logo}`} alt="" class="max-w-52" />
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

<a href="/works" class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	Back to Works
</a>
