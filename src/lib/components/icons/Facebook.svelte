<script lang="ts">
	// Brand icons were removed in @lucide/svelte v1 (see https://github.com/lucide-icons/lucide/issues/670).
	// Artwork vendored from @lucide/svelte v0.577.0 (ISC) to keep the outline style of the rest of the set.
	import { Icon, type IconNode, type LucideProps } from '@lucide/svelte';

	let props: LucideProps = $props();

	const iconNode: IconNode = [
		['path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' }]
	];
</script>

<Icon name="facebook" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
