<script lang="ts">
	import CardPost from '$lib/components/CardPost.svelte';
	import { m } from '$lib/paraglide/messages.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.title_blog()} · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">{m.title_blog()}</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<CardPost {post} />
		{/each}
	</ul>
{:else}
	<p class="text-center">{m.no_posts()}</p>
{/if}
