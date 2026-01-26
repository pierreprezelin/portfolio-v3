<script lang="ts">
	import { timeline } from '$lib/data/timeline';
</script>

<section id="projects" class="mt-20">
	<h2 class="h4 mb-6">Who I worked with:</h2>
	<ul>
		{#each timeline as time}
			<li class="mb-7 grid grid-cols-2 gap-2.5 mobile:grid-cols-3 mobile:gap-5">
				<span class="font-serif text-lg">{time.year}</span>
				<span class="flex items-center justify-end mobile:block mobile:text-left">{time.name}</span>
				<span class="font-medium mobile:text-right">
					{#each time.roles as role, i}
						{#if i > 0}<br />{/if}
						{role}
					{/each}
					{#if time.note}
						<br />
						<em class="text-pp-black/60 italic">({time.note})</em>
					{/if}
				</span>
			</li>
		{/each}
	</ul>
	<p class="text-pp-black/60 italic">And multiple personal or school projects...</p>
</section>
