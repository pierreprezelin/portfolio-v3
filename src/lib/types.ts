export type Categories = 'design' | 'dev';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	hour: string;
	banner: string;
	categories: Categories[];
	published: boolean;
};
