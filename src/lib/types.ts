export type Tags = 'design' | 'dev';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	banner: string;
	tags: Tags[];
	published: boolean;
};

export type Work = {
	title: string;
	slug: string;
	description: string;
	date: string;
	banner: string;
	published: boolean;
};
