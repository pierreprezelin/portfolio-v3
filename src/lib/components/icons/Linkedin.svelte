<script lang="ts">
	// Brand icons were removed in @lucide/svelte v1 (see https://github.com/lucide-icons/lucide/issues/670).
	// Artwork vendored from @lucide/svelte v0.577.0 (ISC) to keep the outline style of the rest of the set.
	import { Icon, type IconNode, type LucideProps } from '@lucide/svelte';

	let props: LucideProps = $props();

	const iconNode: IconNode = [
		[
			'path',
			{ d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }
		],
		['rect', { width: '4', height: '12', x: '2', y: '9' }],
		['circle', { cx: '4', cy: '4', r: '2' }]
	];
</script>

<Icon name="linkedin" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
