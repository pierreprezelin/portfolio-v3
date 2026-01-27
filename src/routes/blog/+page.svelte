<script lang="ts">
	import CardPost from '$lib/components/CardPost.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">Blog</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<CardPost {post} />
		{/each}
	</ul>
{:else}
	<p class="text-center">Il n'y a actuellement aucun article.</p>
{/if}
