export type Categories = 'dev' | 'design'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	hour: string
	categories: Categories[]
	published: boolean
}