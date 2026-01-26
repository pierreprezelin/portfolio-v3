import type { Tags, Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { tag } = params;

	try {
		const response = await fetch(`/api/posts`);
		const allPosts = await response.json();

		const posts = allPosts.filter((post: Post) => post.tags.includes(tag as Tags));

		return {
			tag,
			posts
		};
	} catch (e) {
		error(404, `Could not find any post for category: "${tag}"`);
	}
};
