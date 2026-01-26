import { Facebook, Twitter, Linkedin } from '@lucide/svelte';

export const shares = [
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/sharer/sharer.php?u=',
		icon: Facebook,
		color: 'social-facebook'
	},
	{
		label: 'Twitter',
		href: 'https://twitter.com/intent/tweet?url=',
		icon: Twitter,
		color: 'social-twitter'
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/sharing/share-offsite/?url=',
		icon: Linkedin,
		color: 'social-linkedin'
	},
]