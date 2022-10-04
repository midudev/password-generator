<script type="ts">
	import Portal from '@components/davbrito/Portal.svelte'
	import { sineInOut } from 'svelte/easing'
	import { fade } from 'svelte/transition'

	export let show = false
</script>

{#if show}
	<Portal>
		<div
			class="toast w-fit fixed bg-slate-300 text-slate-800 py-2 px-3 rounded-md bottom-4 right-4"
			transition:fade={{ duration: 500, easing: sineInOut }}
		>
			<slot />
		</div>
	</Portal>
{/if}
