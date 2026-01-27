<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import CardPost from '$lib/components/CardPost.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Categorie "{data.tag}" · Blog · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">{data.tag}</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<CardPost {post} />
		{/each}
	</ul>
{:else}
	<p class="text-center">Il n'y a actuellement aucun article pour cette catégorie.</p>
{/if}

<a href="/blog" class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	Retour aux articles
</a>
