<script lang="ts">
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { capitalize } from '$lib/utils';
	import CardPost from '$lib/components/CardPost.svelte';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{m.meta_title_blog_category({ tag: capitalize(data.tag) })}</title>
</svelte:head>

<h1 class="mb-16 text-center">{capitalize(data.tag)}</h1>

{#if data.posts}
	<ul class="flex flex-col gap-10 mobile:gap-8">
		{#each data.posts as post}
			<CardPost {post} />
		{/each}
	</ul>
{:else}
	<p class="text-center">{m.no_posts_for_category()}</p>
{/if}

<a href={localizeHref('/blog', { locale: getLocale() })} class="btn group mt-12">
	<ArrowLeft
		size="24"
		strokeWidth="1"
		class="color:text-pp-black transition-colors group-hover:text-pp-beige"
	/>
	{m.back_to_posts()}
</a>
