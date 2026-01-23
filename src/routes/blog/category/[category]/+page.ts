import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	const { category } = params;

	try {
		const response = await fetch(`/api/posts`);
		const allPosts = await response.json();

		const posts = allPosts.filter((post: Post) => post.categories.includes(category));

		return {
			category,
			posts
		};
	} catch (e) {
		error(404, `Could not find any post for category: "${category}"`);
	}
};
