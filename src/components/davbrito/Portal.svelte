<script type="ts">
	import { onMount } from 'svelte'

	let container: HTMLDivElement | undefined

	$: rebaseElement(container)

	onMount(() => {
		rebaseElement(container)
	})

	function rebaseElement(el: HTMLElement | null | undefined) {
		if (el) document.body.appendChild(el)
	}
</script>

<div bind:this={container}>
	<slot />
</div>
