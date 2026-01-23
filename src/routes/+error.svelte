<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="text-center">
	<h1 class="mb-6 text-center">{page.status}</h1>
	<p>{page.error?.message}</p>
</div>
