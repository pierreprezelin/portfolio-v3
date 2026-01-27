export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	banner: string;
	tags: Tags[];
	published: boolean;
};

export type Skills = 'Dev Front-end' | 'Dev Mobile' | 'UI Design';

export type Tags = 'Design' | 'Développement';

export type Tools = 'Expo' | 'Figma' | 'Illustrator' | 'Next.js' | 'Nuxt' | 'Photoshop' | 'PrestaShop' | 'React' | 'React Native' | 'Vue.js';

export type Work = {
	title: string;
	slug: string;
	date: string;
	banner: string;
	skills: Skills[];
	tools: Tools[];
	published: boolean;
};
