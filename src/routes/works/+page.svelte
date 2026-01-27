<script lang="ts">
	import CardWork from '$lib/components/CardWork.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projets · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">Projets</h1>

{#if data.works}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.works as work}
			<CardWork {work} />
		{/each}
	</ul>
{:else}
	<p class="text-center">Il n'y a actuellement aucun projet.</p>
{/if}
