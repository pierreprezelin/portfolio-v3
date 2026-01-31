<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import type { Work } from '$lib/types';
	import { FolderSearch } from '@lucide/svelte';

	let { work }: { work: Work } = $props();
</script>

<li class="flex flex-col items-center gap-5 mobile:flex-row tablet:gap-10">
	<figure
		class="h-56 w-full shrink-0 overflow-hidden rounded-xl border mobile:aspect-square mobile:h-full mobile:w-1/3 tablet:aspect-auto tablet:w-75"
	>
		<a
			href={localizeHref(`/works/${work.slug}`, { locale: getLocale() })}
			title={m.go_to_project()}
			aria-label={m.go_to_project()}
		>
			{#if work.banner}
				<enhanced:img
					src={`/images/works/${work.banner}`}
					alt=""
					class="h-full w-full object-cover tablet:h-49"
				/>
			{:else}
				<enhanced:img
					src="$lib/assets/images/background-fallback.webp"
					alt=""
					class="h-full w-full object-cover tablet:h-49"
				/>
			{/if}
		</a>
	</figure>
	<div class="flex grow flex-col w-full">
		<div class="flex items-center justify-between gap-2.5">
			<h2 class="h5 mb-0.5">
				<a href={localizeHref(`/works/${work.slug}`, { locale: getLocale() })}>{work.title}</a>
			</h2>
			<span class="h6 font-serif">{work.date}</span>
		</div>
		<span>{work.skills.join(' · ')}</span>
		<span class="mt-4 mb-5 inline-flex text-pp-black/60 italic">{work.tools.join(', ')}</span>
		<p>
			<a
				href={localizeHref(`/works/${work.slug}`, { locale: getLocale() })}
				class="flex items-center gap-2.5"
			>
				<FolderSearch size="24" strokeWidth="1" color="var(--color-pp-black)" />
				{m.view_project()}
			</a>
		</p>
	</div>
</li>
