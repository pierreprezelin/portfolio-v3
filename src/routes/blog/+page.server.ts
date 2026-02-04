import { definePageMetaTags } from 'svelte-meta-tags';
import { m } from '$lib/paraglide/messages';
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const pageTags = definePageMetaTags({
		title: m.title_blog() + ' · Pierre Prézelin',
		openGraph: {
			title: m.title_blog() + ' · Pierre Prézelin'
		},
		twitter: {
			title: m.title_blog() + ' · Pierre Prézelin'
		}
	});

	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();

	return { ...pageTags, posts };
}
