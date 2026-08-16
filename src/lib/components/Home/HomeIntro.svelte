<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { FileDown, FolderSearch } from '@lucide/svelte';

	const yearsOfExp = new Date().getFullYear() - 2020;
</script>

<section id="intro">
	<p class="mb-4 tablet:pr-48">{m.intro_1({yearsOfExp})}</p>
	<p class="mb-4 tablet:pr-48">{m.intro_2()}</p>
	<p class="mb-5 tablet:pr-48">
		{m.intro_3()}
	</p>
	<div class="flex flex-col justify-between gap-5">
		<p class="inline-flex flex-col mobile:flex-row gap-2">
			<a href="/works" class="flex items-center gap-2.5">
				<FolderSearch size="24" strokeWidth="1" color="var(--color-pp-black)" />
				{m.view_projects()}
			</a>
			<span class="hidden mobile:flex">
				·
			</span>
			<a href="/docs/cv_pierre-prezelin.pdf" download class="flex items-center gap-2.5">
				<FileDown size="24" strokeWidth="1" color="var(--color-pp-black)" />
				{m.download_my_cv()}
			</a>
		</p>
		<p class="hidden text-pp-black/75 italic mobile:text-right tablet:inline-flex">
			{m.dont_worry()}
		</p>
	</div>
</section>
