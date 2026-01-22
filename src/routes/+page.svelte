<script lang="ts">
	import { socials } from '$lib/data/socials';

	import HomeIntro from '$lib/components/Home/HomeIntro.svelte';
	import HomeTimeline from '$lib/components/Home/HomeTimeline.svelte';
	import HomeSkills from '$lib/components/Home/HomeSkills.svelte';
	import HomeContact from '$lib/components/Home/HomeContact.svelte';

	let headerHeight = 0;
</script>

<h1 class="mb-8">Hi, I'm Pierre Prézelin!</h1>

<div class="grid grid-cols-4 gap-5">
	<div class="sticky self-start z-1 col-span-1" bind:clientHeight={headerHeight} style="top: calc({headerHeight}px + 1.25rem)">
		<ul class="grid grid-cols-3 gap-2.5 pr-20">
			{#each socials as social}
				<li class="first:col-span-2">
					<a
						href={social.href}
						target="_blank"
						title={social.label}
						aria-label={social.label}
						class="flex h-10 items-center justify-center rounded-lg border transition-transform hover:-translate-y-0.5"
						style="
						background-color: oklch(from var(--color-{social.color}) l c h / 0.05); 
						border-color: var(--color-{social.color});
					"
					>
						<svelte:component
							this={social.icon}
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
