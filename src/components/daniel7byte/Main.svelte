<script>
	import { onMount } from 'svelte'

	const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let password = ''
	let passwordLength = 5
	let passwordLevel = '(Easy)'
	let copiedDialog

	function createPassword(passwordLength) {
		let result = ''
		for (let i = 0; i < passwordLength; i++) {
			result += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length))
		}
		password = result
	}

	function handleRange(e) {
		passwordLength = e.target.value

		if (passwordLength < 8) {
			passwordLevel = '(Easy)'
		} else if (passwordLength < 10) {
			passwordLevel = '(Medium)'
		} else {
			passwordLevel = '(Hard)'
		}

		onMount(createPassword(passwordLength))
	}

	function handleClipboard(e) {
		e.preventDefault()
		navigator.clipboard.writeText(password)
		copiedDialog.showModal()
		setTimeout(() => copiedDialog.close(), 2000)
	}

	onMount()
	createPassword(passwordLength)
</script>

<main
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded p-6 w-full max-w-sm"
>
	<h1 class="uppercase font-bold text-xl text-center">Password Generator</h1>
	<form>
		<input
			type="range"
			min="5"
			max="18"
			value="5"
			on:input={handleRange}
			class="mb-6 w-full h-2 rounded-lg"
		/>
		<p class="pb-3 pl-5">Number: {passwordLength} {passwordLevel}</p>
		<div class="relative">
			<textarea
				readonly
				class="bg-red-50 block resize-none text-black w-full pl-5 rounded-full text-lg h-10"
				value={password}
			/>
		</div>
		<button
			class="mt-2 mb-2 p-2 bg-red-500 font-bold uppercase w-full rounded-full hover:opacity-95"
			on:click={(e) => {
				e.preventDefault()
				createPassword(passwordLength)
			}}
		>
			Generate
		</button>
		<button
			class=" p-2 bg-red-50 border-red-900 border-spa text-red-500 font-bold uppercase w-full rounded-full hover:opacity-95"
			on:click={handleClipboard}
		>
			Copy to clipboard
		</button>
	</form>
</main>
<dialog bind:this={copiedDialog} class="top-4 bottom-auto rounded-full">
	<p>Copied to clipboard!</p>
</dialog>
