<script lang="ts">
	import { fade } from 'svelte/transition'

	export let message: string = ''
	export let status: 'success' | 'error' = 'success'
</script>

<div
	class="toast fixed top-2 mx-auto px-4 py-2"
	class:success={status === 'success'}
	class:error={status === 'error'}
	transition:fade
>
	<span>
		{message}
	</span>
</div>

<style>
	.toast.success {
		background-color: #10b981;
		color: white;
	}
	.toast.error {
		background-color: #ef4444;
		color: white;
	}
</style>
