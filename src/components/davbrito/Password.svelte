<script type="ts">
	import { fly } from 'svelte/transition'

	export let value: string

	let transitioning = false

	function onStartTransition(event: Event) {
		;(event.target as HTMLElement).style.position = 'absolute'
	}

	function onEndTransition(event: Event) {
		;(event.target as HTMLElement).style.position = ''
	}
</script>

<output
	class="block overflow-hidden whitespace-nowrap relative select-text mx-auto h-8 font-mono bg-neutral-50 text-neutral-700 rounded-md px-2 py-1 flex-grow"
>
	{#key value}
		<div
			class="absolute"
			in:fly|local={{ y: -20 }}
			out:fly|local={{ y: 20 }}
			on:introstart={onStartTransition}
			on:introend={onEndTransition}
			on:outrostart={onStartTransition}
			on:introend={onEndTransition}
		>
			{value}
		</div>
	{/key}
</output>
