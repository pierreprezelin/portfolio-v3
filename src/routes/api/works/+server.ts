import { json } from '@sveltejs/kit';
import type { Work } from '$lib/types';

async function getWorks() {
	let works: Work[] = [];

	const paths = import.meta.glob('/src/content/works/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Work, 'slug'>;
			const work = { ...metadata, slug } satisfies Work;
			work.published && works.push(work);
		}
	}
	return works;
}

export async function GET() {
	const works = await getWorks();
	return json(works);
}
