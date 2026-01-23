<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import { capitalize, formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} · Blog · Pierre Prézelin</title>
	<meta name="description" content={data.meta.description} />

	<meta name="og:title" content={data.meta.title} />
	<meta name="og:description" content={data.meta.description} />
	<!-- <meta name="og:image" content={image} /> -->

	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<!-- <meta name="twitter:image" content={image} /> -->
</svelte:head>

<article>
	<hgroup>
		<h1 class="mb-1.5">{data.meta.title}</h1>
		<p class="font-medium">Posted on: {formatDate(data.meta.date)}, {data.meta.hour}</p>
	</hgroup>
	{#if data.meta.categories.length}
		<ul class="flex gap-2.5 mt-2.5">
			{#each data.meta.categories as category}
				<li>
					<a
						href="/blog/category/{category}"
						class="rounded border px-1.5 py-1 text-sm transition-colors hover:border-pp-black hover:bg-pp-black hover:text-pp-beige"
					>
						{capitalize(category)}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
	<p class="mt-8 mb-8">{data.meta.description}</p>
	<hr />
	<data.content />
</article>

<a href="/blog" class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	Back to Posts
</a>

<style lang="scss">
	h2,
	h3,
	h4,
	h5,
	h6 {
		position: relative;

		&::before {
			content: '#';
			position: absolute;
			left: -1ch;
			top: 0;
			line-height: 1;
			opacity: 0;
			text-decoration: underline;
		}

		&:hover {
			&::before {
				opacity: 1;
			}
		}
	}
</style>
