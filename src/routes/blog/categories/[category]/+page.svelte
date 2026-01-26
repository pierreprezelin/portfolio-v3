<script lang="ts">
	import { capitalize } from '$lib/utils.js';
	import { ArrowLeft } from '@lucide/svelte';
	import CardPost from '$lib/components/CardPost.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Category "{capitalize(data.category)}" · Blog · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">{capitalize(data.category)}</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<CardPost {post} />
		{/each}
	</ul>
{:else}
	<p class="text-center">There are currently no posts for this category.</p>
{/if}

<a href="/blog" class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	Back to Posts
</a>
