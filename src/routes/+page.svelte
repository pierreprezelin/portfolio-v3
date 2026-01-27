<script lang="ts">
	import { socials } from '$lib/data/socials';

	import HomeIntro from '$lib/components/Home/HomeIntro.svelte';
	import HomeTimeline from '$lib/components/Home/HomeTimeline.svelte';
	import HomeSkills from '$lib/components/Home/HomeSkills.svelte';
	import HomeContact from '$lib/components/Home/HomeContact.svelte';

	let headerHeight = 0;
</script>

<h1 class="mb-6 tablet:mb-12">Hi, je suis Pierre Prézelin !</h1>

<div class="grid grid-cols-3 tablet:grid-cols-4 gap-5">
	<div class="hidden tablet:block tablet:sticky self-start z-1 col-span-1" bind:clientHeight={headerHeight} style="top: calc({headerHeight}px + 1.25rem)">
		<ul class="grid grid-cols-3 gap-2.5 pr-20">
			{#each socials as social}
				<li class="first:col-span-2">
					<a
						href={social.href}
						target="_blank"
						title={social.label}
						aria-label={social.label}
						class="flex h-10 items-center justify-center rounded-lg border transition-transform tablet:hover:-translate-y-0.5"
						style="
						background-color: oklch(from var(--color-{social.color}) l c h / 0.05); 
						border-color: var(--color-{social.color});
					"
					>
						<social.icon
							size="24"
							strokeWidth="1"
							style="color: var(--color-{social.color});"
						/>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="col-span-3">
		<HomeIntro />
		<HomeSkills />
		<HomeTimeline />
		<HomeContact />
	</div>
</div>
