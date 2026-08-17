<script lang="ts">
	// Brand icons were removed in @lucide/svelte v1 (see https://github.com/lucide-icons/lucide/issues/670).
	// Artwork vendored from @lucide/svelte v0.577.0 (ISC) to keep the outline style of the rest of the set.
	import { Icon, type IconNode, type LucideProps } from '@lucide/svelte';

	let props: LucideProps = $props();

	const iconNode: IconNode = [
		['polygon', { points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' }],
		['line', { x1: '12', x2: '12', y1: '22', y2: '15.5' }],
		['polyline', { points: '22 8.5 12 15.5 2 8.5' }],
		['polyline', { points: '2 15.5 12 8.5 22 15.5' }],
		['line', { x1: '12', x2: '12', y1: '2', y2: '8.5' }]
	];
</script>

<Icon name="codepen" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
