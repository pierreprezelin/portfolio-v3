<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import CardWork from '$lib/components/CardWork.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.title_works()} · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">{m.title_works()}</h1>

{#if data.works}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.works as work, i}
			<CardWork {work} displayedIndex={data.works.length - i} />
		{/each}
	</ul>
{:else}
	<p class="text-center">{m.no_works()}</p>
{/if}
