<script lang="ts">
	let { position = 'top' }: { position: 'top' | 'bottom' } = $props();
</script>

<div class="flex justify-center {position === 'top' && 'mb-24'}">
	<span
		class="w-5 {position === 'top' ? 'h-33' : 'h-5'} bg-pp-blue {position === 'top'
			? 'first:rounded-bl-md'
			: 'first:rounded-tl-md'}"
	></span>
	<span class="w-5 {position === 'top' ? 'h-33' : 'h-5'} bg-pp-brown"></span>
	<span class="w-5 {position === 'top' ? 'h-33' : 'h-5'} bg-pp-yellow"></span>
	<span
		class="w-5 {position === 'top' ? 'h-33' : 'h-5'} bg-pp-red {position === 'top'
			? 'last:rounded-br-md'
			: 'last:rounded-tr-md'}"
	></span>
</div>
