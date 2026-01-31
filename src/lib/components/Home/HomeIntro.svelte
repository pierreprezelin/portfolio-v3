<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { FileDown } from '@lucide/svelte';
</script>

<section id="intro">
	<p class="mb-4">
		{m.intro_1()}<br />
		{m.intro_2()}
	</p>
	<p class="mb-4">{m.intro_3()}</p>
	<p class="mb-5 tablet:pr-48">
		{m.intro_4()}{#if getLocale() === "en"}<br />{/if}
		{m.intro_5()}
	</p>
	<div class="flex flex-col justify-between gap-5 mobile:flex-row">
		<p>
			<a href="/docs/cv_pierre-prezelin.pdf" download class="flex items-center gap-2.5">
				<FileDown size="24" strokeWidth="1" color="var(--color-pp-black)" />
				{m.download_my_cv()}
			</a>
		</p>
		<p class="hidden text-pp-black/60 italic mobile:text-right tablet:inline-flex">
			{m.dont_worry()}
		</p>
	</div>
</section>
