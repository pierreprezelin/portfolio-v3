<script lang="ts">
	// Brand icons were removed in @lucide/svelte v1 (see https://github.com/lucide-icons/lucide/issues/670).
	// Artwork vendored from @lucide/svelte v0.577.0 (ISC) to keep the outline style of the rest of the set.
	import { Icon, type IconNode, type LucideProps } from '@lucide/svelte';

	let props: LucideProps = $props();

	const iconNode: IconNode = [
		[
			'path',
			{
				d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
			}
		]
	];
</script>

<Icon name="twitter" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
