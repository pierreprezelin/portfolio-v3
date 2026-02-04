<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { shares } from '$lib/data/shares';
	import { capitalize, formatDate } from '$lib/utils';
	import '$lib/styles/prose.scss';

	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
</script>

<article>
	<hgroup>
		<h1 class="mb-1.5">{data.meta.title}</h1>
		<p class="font-medium">{m.posted_on({date: formatDate(data.meta.date, "medium", getLocale())})}</p>
	</hgroup>
	{#if data.meta.tags.length}
		<ul class="mt-2.5 flex gap-2.5">
			{#each data.meta.tags as tag}
				<li>
					<a
						href={localizeHref(`/blog/categories/${tag}`, { locale: getLocale() })}
						class="rounded border px-1.5 py-1 text-sm transition-colors hover:border-pp-black hover:bg-pp-black hover:text-pp-beige"
					>
						{capitalize(tag)}
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
		{#if data.meta.cover}
			<figure class="mx-auto mb-10 h-full w-full max-w-200">
				<enhanced:img
					src={data.meta.cover}
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

<a href={localizeHref('/blog', { locale: getLocale() })} class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	{m.back_to_posts()}
</a>