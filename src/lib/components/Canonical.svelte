<script lang="ts">
	import { page } from '$app/state';

	const siteUrl = 'https://pierreprezelin.com';

	let currentPath = $derived(page.url.pathname);
	let basePath = $derived(
		currentPath.startsWith('/en') ? currentPath.replace('/en', '') || '/' : currentPath
	);

	const formatUrl = (path: string) => `${siteUrl}${path === '/' ? '' : path}`;

	let frUrl = $derived(formatUrl(basePath));
	let enUrl = $derived(formatUrl(basePath === '/' ? '/en' : `/en${basePath}`));
	let canonicalUrl = $derived(siteUrl + (currentPath === '/' ? '' : currentPath));
</script>

<link rel="canonical" href={canonicalUrl} />
<link rel="alternate" hreflang="fr" href={frUrl} />
<link rel="alternate" hreflang="en" href={enUrl} />
<link rel="alternate" hreflang="x-default" href={frUrl} />
