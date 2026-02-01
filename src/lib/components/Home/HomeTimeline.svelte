<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { timeline } from '$lib/data/timeline';
</script>

<section id="projects" class="mt-20">
	<h2 class="h4 mb-6">{m.who_i_worked_with()}</h2>
	<ul>
		{#each timeline as experience}
			<li class="mb-7 grid grid-cols-2 gap-2.5 mobile:grid-cols-3 mobile:gap-5">
				<span class="font-serif text-lg">{experience.year}</span>
				<span class="flex items-center justify-end mobile:block mobile:text-left">{experience.name}</span>
				<span class="font-medium mobile:text-right">
					{#each experience.roles as role, i}
						{#if i > 0}<br />{/if}
						{role}
					{/each}
					{#if experience.note}
						<br />
						<em class="text-pp-black/75 italic">({experience.note})</em>
					{/if}
				</span>
			</li>
		{/each}
	</ul>
	<p class="text-pp-black/75 italic">Ainsi que de multiples projets personnels ou étudiants...</p>
</section>
