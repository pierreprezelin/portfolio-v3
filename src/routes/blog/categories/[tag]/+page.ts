import { error } from '@sveltejs/kit';
import { definePageMetaTags } from 'svelte-meta-tags';
import { m } from '$lib/paraglide/messages';
import { capitalize } from '$lib/utils';
import type { Tags, Post } from '$lib/types';

export const load = async ({ fetch, params }) => {
	const { tag } = params;

	const pageTags = definePageMetaTags({
		title: m.meta_title_blog_category({ tag: capitalize(tag) }),
		openGraph: {
			title: m.meta_title_blog_category({ tag: capitalize(tag) })
		},
		twitter: {
			title: m.meta_title_blog_category({ tag: capitalize(tag) })
		}
	});

	try {
		const response = await fetch(`/api/posts`);
		const allPosts = await response.json();

		const posts = allPosts.filter((post: Post) => post.tags.includes(tag as Tags));

		return {
			...pageTags,
			tag,
			posts
		};
	} catch (e) {
		error(404, `Could not find any post for category: "${tag}"`);
	}
};


const pageTags = definePageMetaTags({
		title: m.title_blog() + ' · Pierre Prézelin',
		openGraph: {
			title: m.title_blog() + ' · Pierre Prézelin'
		},
		twitter: {
			title: m.title_blog() + ' · Pierre Prézelin'
		}
	});