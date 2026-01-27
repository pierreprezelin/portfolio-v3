<script lang="ts">
	import { page } from '$app/state';
	import { shares } from '$lib/data/shares';
	import { formatDate } from '$lib/utils';
	import '$lib/styles/prose.scss';

	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} · Blog · Pierre Prézelin</title>
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image} />

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image:src" content={data.meta.image} />
</svelte:head>

<article>
	<hgroup>
		<h1 class="mb-1.5">{data.meta.title}</h1>
		<p class="font-medium">Publié le : {formatDate(data.meta.date)}</p>
	</hgroup>
	{#if data.meta.tags.length}
		<ul class="mt-2.5 flex gap-2.5">
			{#each data.meta.tags as tag}
				<li>
					<a
						href="/blog/categories/{tag}"
						class="rounded border px-1.5 py-1 text-sm transition-colors hover:border-pp-black hover:bg-pp-black hover:text-pp-beige"
					>
						{tag}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
	<ul class="mt-5 flex gap-2.5">
		{#each shares as share}
			<li>
				<a
					href={share.href + page.url}
					target="_blank"
					title={share.label}
					aria-label={share.label}
					class="flex h-10 w-10 items-center justify-center rounded-lg border transition-transform tablet:hover:-translate-y-0.5"
					style="
						background-color: oklch(from var(--color-{share.color}) l c h / 0.05); 
						border-color: var(--color-{share.color});
					"
				>
					<share.icon size="24" strokeWidth="1" style="color: var(--color-{share.color});" />
				</a>
			</li>
		{/each}
	</ul>
	<p class="mt-8 mb-8">{data.meta.description}</p>
	<hr />
	<div class="mt-10">
		{#if data.meta.banner}
			<figure class="mx-auto mb-10 h-full w-full max-w-200">
				<enhanced:img
					src={`/images/blog/${data.meta.banner}`}
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

<a href="/blog" class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	Retour aux articles
</a>