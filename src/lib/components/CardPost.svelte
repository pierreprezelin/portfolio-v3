<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { FolderSearch } from '@lucide/svelte';
	import { formatDate } from '$lib/utils';
	import type { Post } from '$lib/types';

	let { post }: { post: Post } = $props();
</script>

<li class="flex flex-col items-center gap-5 mobile:flex-row tablet:gap-10">
	<figure
		class="h-56 w-full shrink-0 overflow-hidden rounded-xl border mobile:aspect-square mobile:h-full mobile:w-1/3 tablet:aspect-auto tablet:w-75"
	>
		<a href={`/blog/${post.slug}`} title={m.go_to_post()} aria-label={m.go_to_post()}>
			{#if post.banner}
				<enhanced:img src={`/images/blog/${post.banner}`} alt="" class="h-full w-full object-cover" />
			{:else}
				<enhanced:img
					src="$lib/assets/images/background-fallback.webp"
					alt=""
					class="h-full w-full object-cover"
				/>
			{/if}
		</a>
	</figure>
	<div class="flex flex-col">
		<span class="mb-1.5 flex font-serif text-sm">{formatDate(post.date, "medium", getLocale())}</span>
		<h2 class="h5 mb-0.5">
			<a href={`/blog/${post.slug}`}>{post.title}</a>
		</h2>
		<p class="mb-3.5 line-clamp-2">{post.description}</p>
		<p>
			<a href={`/blog/${post.slug}`} class="flex items-center gap-2.5">
				<FolderSearch size="24" strokeWidth="1" color="var(--color-pp-black)" />
				{m.read_more()}
			</a>
		</p>
	</div>
</li>
