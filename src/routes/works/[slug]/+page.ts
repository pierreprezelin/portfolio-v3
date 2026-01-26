import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const work = await import(`../../../content/works/${params.slug}.svx`)

		return {
			content: work.default,
			meta: work.metadata
		}
	} catch (e) {
		error(404, `Could not find any work for slug: "${params.slug}"`)
	}
}