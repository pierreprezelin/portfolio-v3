import { error } from '@sveltejs/kit';
import { definePageMetaTags } from 'svelte-meta-tags';
import { m } from '$lib/paraglide/messages';

export async function load({ url, params }) {
	try {
		const work = await import(`../../../content/works/${params.slug}.svx`);

		return {
			content: work.default,
			meta: work.metadata,
			...definePageMetaTags({
				title: `${work.metadata.title} · ${m.title_works()} · Pierre Prézelin`,
				openGraph: {
					title: `${work.metadata.title} · ${m.title_works()} · Pierre Prézelin`,
					images: [
						{
							secureUrl: work.metadata.cover
								? `${url.origin}/images/works/${work.metadata.cover}`
								: 'https://www.pierreprezelin.com/images/og-image.webp',
							url: work.metadata.cover
								? `${url.origin}/images/works/${work.metadata.cover}`
								: 'https://www.pierreprezelin.com/images/og-image.webp',
							alt: work.metadata.caption ?? 'Og Image'
						}
					]
				},
				twitter: {
					title: `${work.metadata.title} · ${m.title_works()} · Pierre Prézelin`,
					image: work.metadata.cover
						? `${url.origin}/images/works/${work.metadata.cover}`
						: 'https://www.pierreprezelin.com/images/og-image.webp',
					imageAlt: work.metadata.caption ?? 'Twitter Image'
				}
			})
		};
	} catch (e) {
		error(404, `Could not find any work for slug: "${params.slug}"`);
	}
}
