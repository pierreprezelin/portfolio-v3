import { definePageMetaTags } from 'svelte-meta-tags';
import { m } from '$lib/paraglide/messages';
import type { Work } from '$lib/types';

export async function load({ fetch }) {
	const pageTags = definePageMetaTags({
    title: m.title_works() + ' · Pierre Prézelin',
    openGraph: {
      title: m.title_works() + ' · Pierre Prézelin',
		},
		twitter: {
			title: m.title_works() + ' · Pierre Prézelin',
		}
	});
	
	const response = await fetch('/api/works');
	const works: Work[] = await response.json();

	return { ...pageTags, works };
}
