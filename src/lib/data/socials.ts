import { Mail, Linkedin, Github, Codepen, Dribbble } from '@lucide/svelte';

export const socials = [
	{
		label: 'Email',
		href: 'mailto:contact@pierreprezelin.com',
		pseudo: 'contact@pierreprezelin.com',
		icon: Mail,
		color: 'color-pp-red'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/pierre-prezelin/',
		pseudo: 'Pierre Prézelin',
		icon: Linkedin,
		color: 'color-social-linkedin'
	},
	{
		label: 'GitHub',
		href: 'https://github.com/pierreprezelin',
		pseudo: '@pierreprezelin',
		icon: Github,
		color: 'color-social-github'
	},
	{
		label: 'CodePen',
		href: 'https://codepen.io/PierrePrezelin',
		pseudo: '@PierrePrezelin',
		icon: Codepen,
		color: 'color-pp-black'
	},
	{
		label: 'Dribbble',
		href: 'https://dribbble.com/pierre-prezelin',
		pseudo: '@pierre-prezelin',
		icon: Dribbble,
		color: 'color-social-dribbble'
	},
]