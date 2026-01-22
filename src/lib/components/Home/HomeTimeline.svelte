<script lang="ts">
	import { timeline } from '$lib/data/timeline';
</script>

<section id="projects" class="mt-20">
	<h2 class="h4 mb-6">What I worked on:</h2>
	<ul>
		{#each timeline as time}
			<li class="mb-7 grid grid-cols-2 mobile:grid-cols-3 gap-2.5 mobile:gap-5">
				<span class="font-serif text-lg">{time.year}</span>
				<span class="flex mobile:block items-center justify-end mobile:text-left">{time.name}</span>
				<span class="mobile:text-right font-medium">
					{time.roles[0]}
					{#if time.roles.length > 1}
						<br />
						{time.roles[1]}
					{/if}
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
