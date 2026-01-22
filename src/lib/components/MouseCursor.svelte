<script lang="ts">
	import { Spring } from 'svelte/motion';

	let trail = new Spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.5,
			damping: 0.9
		}
	);

	let isPointer = $state(false);
	let isVisible = $state(false);
	let isDesktop = $state(false);

	$effect(() => {
		isDesktop = window.matchMedia('(min-width: 992px)').matches;
	});

	function handleCursorMove(e: MouseEvent) {
		if (!isDesktop) return;

		const isAtWindowEdge =
			e.clientX <= 1 ||
			e.clientY <= 1 ||
			e.clientX >= window.innerWidth - 1 ||
			e.clientY >= window.innerHeight - 1;

		isVisible = !isAtWindowEdge;
		if (isVisible) {
			trail.target = { x: e.clientX, y: e.clientY };
		}

		const target = e.target as Element;
		isPointer = !!target?.closest('a, button, input, select, textarea, [role="button"]');
	}
</script>

<svelte:document
	on:mousemove={handleCursorMove}
	on:mouseenter={() => isDesktop && (isVisible = true)}
	on:mouseleave={() => (isVisible = false)}
/>

<svg
	class="pointer-events-none fixed top-0 left-0 z-9999 hidden tablet:block"
	style="shape-rendering: crispEdges; image-rendering: pixelated; width: 100vw; height: 100vh;"
	style:opacity={isVisible ? 1 : 0}
>
	<g transform="translate({trail.current.x}, {trail.current.y})">
		{#if isPointer}
			<path
				d="M5 0H7V1H8V5H10V6H13V7H15V8H16V9H17V16H16V19H15V22H5V19H4V17H3V15H2V13H1V12H0V9H3V10H4V1H5"
				fill="#302D2D"
			/>
			<path
				d="M7 1V10H8V6H10V10H11V7H13V11H14V8H15V9H16V16H15V19H14V21H6V19H5V17H4V15H3V13H2V12H1V10H3V11H4V12H5V1"
				fill="white"
			/>
		{:else}
			<path
				d="M0 0H1V1H2V2H3V3H4V4H5V5H6V6H7V7H8V8H9V9H10V10H11V11H12V13H8V14H9V16H10V18H9V19H7V18H6V16H5V14H4V15H3V16H2V17H0"
				fill="#302D2D"
			/>
			<path
				d="M1 2H2V3H3V4H4V5H5V6H6V7H7V8H8V9H10V11H11V12H7V14H8V16H9V18H7V16H6V14H5V13H4V14H3V15H2V16H1"
				fill="white"
			/>
		{/if}
	</g>
</svg>

<style lang="scss">
	:global(html, body, *) {
		cursor:
			url('/cursor-default.svg') 0 0,
			auto !important;
	}
	:global(a, a *, button, button *, [role='button'], [role='button'] *) {
		cursor:
			url('/cursor-pointer.svg') 0 0,
			auto !important;
	}
</style>
