<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="flex justify-center items-center mt-24">
	<div class="container mx-auto">
		<div class="relative w-full h-0.5 mb-6 bg-pp-black rounded-full">
			<span class="absolute top-[50%] left-[50%] w-4 h-4 block bg-pp-black border-4 border-pp-beige rounded-md rotate-45 -translate-1/2"></span>
		</div>
		<div class="py-9 text-sm text-center">
			Pierre Prézelin © {year}
		</div>
		<div class="patterns flex justify-center">
			<span class="pattern bg-pp-blue first:rounded-tl-md"></span>
			<span class="pattern bg-pp-brown"></span>
			<span class="pattern bg-pp-yellow"></span>
			<span class="pattern bg-pp-red last:rounded-tr-md"></span>
		</div>
	</div>
</footer>

<style lang="scss">
	.pattern {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>