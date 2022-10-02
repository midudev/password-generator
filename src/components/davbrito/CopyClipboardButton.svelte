<script type="ts">
	import CopyIcon from '@components/davbrito/copy-icon.svelte'
	import Toast from '@components/davbrito/Toast.svelte'

	export let value: string | undefined

	let showAlert = false
	let timeout: number | undefined
	async function handleClipboard() {
		if (!value) return

		await navigator.clipboard.writeText(value)
		showAlert = true
		if (timeout) window.clearTimeout(timeout)
		timeout = window.setTimeout(() => {
			timeout = undefined
			showAlert = false
		}, 3000)
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'c') {
			event.preventDefault()
			handleClipboard()
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />
<button
	class="relative ml-auto w-7 h-7 grid place-items-center bg-pink-400 hover:bg-pink-500 rounded-md transition-all"
	type="button"
	aria-label="Copiar contraseña"
	on:click={handleClipboard}
>
	<CopyIcon />
	<div
		class="tooltip absolute bottom-0 translate-y-[calc(100%+5px)] bg-pink-700/80 rounded-md whitespace-nowrap shadow-lg px-2 py-1 transition-all ease-in"
	>
		Copiar contraseña
	</div>
</button>

<Toast show={showAlert}>
	<div class="flex gap-2 items-center">
		<CopyIcon size="1.3em" />Contraseña copiada al portapapeles
	</div>
</Toast>

<style>
	.tooltip {
		visibility: hidden;
		opacity: 0;
	}

	button:hover .tooltip {
		visibility: visible;
		opacity: 1;
	}
</style>
