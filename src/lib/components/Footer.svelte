<script lang="ts">
	import Pattern from "./Pattern.svelte";
	
	const year = new Date().getFullYear();
</script>

<footer class="mt-24 flex items-center justify-center">
	<div class="container mx-auto">
		<div class="relative mb-6 h-0.5 w-full rounded-full bg-pp-black">
			<span
				class="absolute top-[50%] left-[50%] block h-4 w-4 -translate-1/2 rotate-45 rounded-md border-4 border-pp-beige bg-pp-black"
			></span>
		</div>
		<div class="py-9 text-center text-sm">
			Pierre Prézelin © {year}
		</div>
		<Pattern position="bottom" />
	</div>
</footer>
