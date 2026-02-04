import { defineBaseMetaTags } from 'svelte-meta-tags';
import { getLocale } from '$lib/paraglide/runtime';
import { m } from '$lib/paraglide/messages';

export const load = ({ url }) => {
	const { pathname } = url;
	const cleanPathname = url.pathname.replace(/^\/(en|fr)/, '') || '/';
	
	const baseTags = defineBaseMetaTags({
		title: m.seo_default_title(),
		description: m.seo_default_description(),
		keywords: [
			'Pierre',
			'Prézelin',
			'portfolio',
			'blog',
			'france',
			'front-end',
			'developer',
			'dev',
			'development',
			'ui',
			'ux',
			'webdesign'
		],
		canonical: new URL(url.pathname, url.origin).href,
		languageAlternates: [
			{
				hrefLang: 'fr',
				href: `${url.origin}/fr${cleanPathname}`.replace(/\/$/, '')
			},
			{
				hrefLang: 'en',
				href: `${url.origin}/en${cleanPathname}`.replace(/\/$/, '')
			},
			{
				hrefLang: 'x-default',
				href: `${url.origin}${cleanPathname}`.replace(/\/$/, '')
			}
		],
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: getLocale() === 'fr' ? 'fr_FR' : 'en_US',
			title: m.seo_default_title(),
			description: m.seo_default_description(),
			siteName: 'Pierre Prézelin',
			images: [
				{
					secureUrl: 'https://www.pierreprezelin.com/images/og-image.webp',
					url: 'https://www.pierreprezelin.com/images/og-image.webp',
					alt: 'Og Image',
					width: 1200,
					height: 630,
					type: 'image/webp'
				}
			]
		},
		twitter: {
			creator: '@prezelin21995',
			site: '@prezelin21995',
			cardType: 'summary_large_image',
			title: m.seo_default_title(),
			description: m.seo_default_description(),
			image: 'https://www.pierreprezelin.com/images/og-image.webp',
			imageAlt: 'Twitter Image'
		}
	});

	return {
		pathname,
		...baseTags
	};
};

export const prerender = true;
