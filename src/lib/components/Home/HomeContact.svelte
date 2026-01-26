<script lang="ts">
	import { socials } from '$lib/data/socials';
</script>

<section id="contact" class="mt-20">
	<h2 class="h4 mb-6">Where to find me:</h2>
	<ul class="flex flex-col mobile:grid mobile:grid-cols-2 tablet:grid-cols-3 gap-5">
		{#each socials as social}
			<li class="first:col-span-2">
				<a
					href={social.href}
					target="_blank"
					title={social.label}
					aria-label={social.label}
					class="relative flex flex-col rounded-lg border p-6 transition-transform tablet:hover:-translate-y-1"
					style="
						background-color: oklch(from var(--color-{social.color}) l c h / 0.05); 
						border-color: var(--color-{social.color});
					"
				>
					<social.icon
						size="24"
						strokeWidth="1"
						style="color: var(--color-{social.color});"
						class="absolute mobile:relative top-6.5 mobile:top-auto right-5 mobile:right-auto mobile:mt-1 mobile:mb-4"
					/>
					<h3 class="h6 serif">{social.label}</h3>
					<span>{social.pseudo}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
