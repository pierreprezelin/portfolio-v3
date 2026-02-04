import { error } from '@sveltejs/kit'
import { definePageMetaTags } from 'svelte-meta-tags';

export async function load({ url, params }) {
	try {
		const post = await import(`../../../content/posts/${params.slug}.svx`)

		return {
			content: post.default,
			meta: post.metadata,
			...definePageMetaTags({
				title: post.metadata.title + ' · Blog · Pierre Prézelin',
				description: post.metadata.description,
				openGraph: {
					title: post.metadata.title + ' · Blog · Pierre Prézelin',
					description: post.metadata.description,
					images: [
						{
							secureUrl: post.metadata.cover
								? url.origin + post.metadata.cover
								: 'https://www.pierreprezelin.com/images/og-image.webp',
							url: post.metadata.cover
								? url.origin + post.metadata.cover
								: 'https://www.pierreprezelin.com/images/og-image.webp',
							alt: post.metadata.caption ?? 'Og Image'
						}
					]
				},
				twitter: {
					title: post.metadata.title + ' · Blog · Pierre Prézelin',
					description: post.metadata.description,
					image: post.metadata.cover
						? url.origin + post.metadata.cover
						: 'https://www.pierreprezelin.com/images/og-image.webp',
					imageAlt: post.metadata.caption ?? 'Twitter Image'
				}
			})
		}
	} catch (e) {
		error(404, `Could not find any post for slug: "${params.slug}"`)
	}
}