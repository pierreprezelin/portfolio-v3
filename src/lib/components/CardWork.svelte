<script lang="ts">
	import { FolderSearch } from '@lucide/svelte';
	import type { Work } from '$lib/types';

	let { work }: { work: Work } = $props();
</script>

<li class="flex flex-col items-center gap-5 mobile:flex-row tablet:gap-10">
	<figure
		class="h-56 w-full shrink-0 overflow-hidden rounded-xl border mobile:aspect-square mobile:h-full mobile:w-1/3 tablet:aspect-auto tablet:w-75"
	>
		<a href={`/works/${work.slug}`} title="Go to Work" aria-label="Go to Work">
			{#if work.banner}
				<enhanced:img
					src={`/images/works/${work.banner}`}
					alt=""
					class="h-full w-full object-cover"
				/>
			{:else}
				<enhanced:img
					src="$lib/assets/images/background-fallback.webp"
					alt=""
					class="h-full w-full object-cover"
				/>
			{/if}
		</a>
	</figure>
	<div class="flex grow flex-col">
		<div class="flex items-center justify-between gap-2.5">
			<h2 class="h5 mb-0.5">
				<a href={`/works/${work.slug}`}>{work.title}</a>
			</h2>
			<span class="h6 font-serif">{work.date}</span>
		</div>
		<span>{work.skills.join(' · ')}</span>
		<span class="mt-4 mb-5 inline-flex text-pp-black/60 italic">{work.tools.join(', ')}</span>
		<p>
			<a href={`/works/${work.slug}`} class="flex items-center gap-2.5">
				<FolderSearch size="24" strokeWidth="1" color="var(--color-pp-black)" />
				View Project
			</a>
		</p>
	</div>
</li>
