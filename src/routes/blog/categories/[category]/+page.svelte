<script lang="ts">
	import { ArrowLeft, FolderSearch } from '@lucide/svelte';
	import { capitalize, formatDate } from '$lib/utils.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>Category "{capitalize(data.category)}" · Blog · Pierre Prézelin</title>
</svelte:head>

<h1 class="mb-16 text-center">{capitalize(data.category)}</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<li class="flex flex-col items-center gap-5 mobile:flex-row tablet:gap-10">
				<figure
					class="h-56 w-full shrink-0 overflow-hidden rounded-xl border mobile:aspect-square mobile:h-full mobile:w-1/3 tablet:aspect-auto tablet:w-75"
				>
					<enhanced:img
						src="$lib/assets/images/background-fallback.webp"
						alt=""
						class="h-full w-full object-cover"
					/>
				</figure>
				<div class="flex flex-col mobile:py-4">
					<span class="mb-1.5 flex font-serif text-sm">{formatDate(post.date)} · {post.hour}</span>
					<h2 class="h5 mb-0.5">
						<a href={`/blog/${post.slug}`}>{post.title}</a>
					</h2>
					<p class="mb-3.5 line-clamp-2">{post.description}</p>
					<p>
						<a href={`/blog/${post.slug}`} class="flex items-center gap-2.5">
							<FolderSearch size="24" strokeWidth="1" color="var(--color-pp-black)" />
							Read More
						</a>
					</p>
				</div>
			</li>
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
