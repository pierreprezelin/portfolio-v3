<script lang="ts">
	import { timeline } from '$lib/data/timeline';
</script>

<section id="projects" class="mt-20">
	<h2 class="h4 mb-6">What I worked on:</h2>
	<ul>
		{#each timeline as time}
			<li class="mb-7 grid grid-cols-3 gap-5">
				<span class="font-serif text-lg">{time.year}</span>
				{time.name}
				<span class="text-right font-medium">
					{time.roles[0]}
					{#if time.roles.length > 1}
						<br />
						{time.roles[1]}
					{/if}
					{#if time.note}
						<br />
						<em class="text-pp-black-light italic">({time.note})</em>
					{/if}
				</span>
			</li>
		{/each}
	</ul>
	<p class="text-pp-black-light italic">And multiple personal or school projects...</p>
</section>
