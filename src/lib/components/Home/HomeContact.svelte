<script lang="ts">
	import { socials } from '$lib/data/socials';
</script>

<section id="contact" class="mt-20">
	<h2 class="h4 mb-6">Where to find me:</h2>
	<ul class="grid grid-cols-3 gap-5">
		{#each socials as social}
			<li class="first:col-span-2">
				<a
					href={social.href}
					target="_blank"
					title={social.label}
					aria-label={social.label}
					class="flex flex-col rounded-lg border p-6 transition-transform hover:-translate-y-1"
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
						class="mt-1 mb-4"
					/>
					<h3 class="h6 serif">{social.label}</h3>
					<span>{social.pseudo}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
