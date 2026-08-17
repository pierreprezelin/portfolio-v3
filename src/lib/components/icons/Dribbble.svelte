<script lang="ts">
	// Brand icons were removed in @lucide/svelte v1 (see https://github.com/lucide-icons/lucide/issues/670).
	// Artwork vendored from @lucide/svelte v0.577.0 (ISC) to keep the outline style of the rest of the set.
	import { Icon, type IconNode, type LucideProps } from '@lucide/svelte';

	let props: LucideProps = $props();

	const iconNode: IconNode = [
		['circle', { cx: '12', cy: '12', r: '10' }],
		['path', { d: 'M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94' }],
		['path', { d: 'M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32' }],
		['path', { d: 'M8.56 2.75c4.37 6 6 9.42 8 17.72' }]
	];
</script>

<Icon name="dribbble" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
