<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="text-center">
	<h1>{page.status}</h1>
	<p class="mt-6 mb-12">{page.error?.message}</p>
	<a href={localizeHref('/blog', { locale: getLocale() })} class="btn">{m.back_to_posts()}</a>
</div>
