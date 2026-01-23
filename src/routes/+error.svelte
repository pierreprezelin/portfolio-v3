<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="text-center">
	<h1>{page.status}</h1>
	<p class="mt-6">{page.error?.message}</p>
</div>
