export type Post = {
	title: string;
	caption: string;
	slug: string;
	description: string;
	date: Date;
	cover: string;
	tags: Tags[];
	published: boolean;
};

export type Skills = 'Dev Front-end' | 'Dev Mobile' | 'Intégration Front-end' | 'UI Design';

export type Tags = 'Design' | 'Développement';

export type Tools = 'Astro' | 'Expo' | 'Figma' | 'HTML/CSS' | 'Illustrator' | 'jQuery' | 'Next.js' | 'Nuxt' | 'Photoshop' | 'PHP' | 'PrestaShop' | 'React' | 'React Native' | 'Supabase' | 'Svelte' | 'SvelteKit' | 'Tailwind' | 'Vue.js' | 'WordPress';

export type Work = {
	title: string;
	caption: string;
	slug: string;
	preview: string;
	date: string;
	dateSort: number;
	cover: string;
	skills: Skills[];
	tools: Tools[];
	published: boolean;
};
