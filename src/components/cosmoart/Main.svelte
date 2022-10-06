<script>
	const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let password = 'iYwOP'
	let passwordLength = 5
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
		createPassword(passwordLength)
	}

	function handleClipboard(e) {
		e.preventDefault()
		navigator.clipboard.writeText(password)
		copiedDialog.showModal()
		setTimeout(() => copiedDialog.close(), 1000)
	}
</script>

<main
	class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded p-6 w-full max-w-sm"
>
	<h1 class="uppercase font-bold">Password Generator</h1>
	<form>
		<input type="range" min="5" max="30" value="5" on:input={handleRange} class="w-full" />
		<span>Number: {passwordLength}</span>
		<div class="relative">
			<textarea
				readonly
				class="bg-purple-100 block resize-none text-black w-full"
				value={password}
			/>
			<button
				class="p-2 bg-purple-500 font-bold uppercase scale-90 absolute top-1 right-2"
				on:click={(e) => {
					e.preventDefault()
					createPassword(passwordLength)
				}}>Other</button
			>
		</div>
		<button
			class="p-2 bg-purple-500 font-bold uppercase my-2 w-full hover:opacity-95"
			on:click={handleClipboard}>Copy</button
		>
	</form>
</main>
<dialog bind:this={copiedDialog} class="top-4 bottom-auto">
	<p class="">Copied to clipboard!</p>
</dialog>
