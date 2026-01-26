export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	banner: string;
	tags: Tags[];
	published: boolean;
};

export type Skills = 'Mobile Dev' | 'Front-end Dev' | 'UI Design';

export type Tags = 'design' | 'dev';

export type Tools = 'Next.js' | 'React' | 'React Native' | 'Expo' | 'Vue.js' | 'Nuxt' | 'Figma' | 'Photoshop' | 'Illustrator' | 'PrestaShop';

export type Work = {
	title: string;
	slug: string;
	date: string;
	banner: string;
	skills: Skills[];
	tools: Tools[];
	published: boolean;
};
