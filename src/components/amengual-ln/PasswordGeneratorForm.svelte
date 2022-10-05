<script lang="ts">
	import ClipboardIcon from './ClipboardIcon.svelte'
	import { generatePassword } from './generatePassword'

	let passwordLength = 12
	let password = ''

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password).then(() => alert('Password copied!'))
	}

	const handlePasswordChange = () => {
		password = generatePassword(passwordLength)
	}
</script>

<article class="flex flex-col text-center p-8 rounded-lg shadow-2xl">
	<h1>Password generator</h1>
	<div
		class="relative my-4 flex items-center border-2 border-solid border-slate-300 bg-slate-100 rounded-lg"
	>
		<input
			type="text"
			bind:value={password}
			maxLength="64"
			readonly
			class="select-none p-2 pr-0 outline-none text-2xl rounded-lg bg-transparent bg-slate-100"
		/>
		<button
			class="py-1.5 px-2 rounded opacity-60 hover:opacity-100 transition"
			on:click={copyToClipboard}
		>
			<ClipboardIcon />
		</button>
	</div>
	<h2>{passwordLength}</h2>
	<input
		type="range"
		max="64"
		bind:value={passwordLength}
		on:click={() => handlePasswordChange()}
	/>
	<button
		on:click={() => handlePasswordChange()}
		class="mt-6 py-2 bg-blue-500 text-white rounded-lg hover:shadow-md transition"
		>Generate password!</button
	>
</article>
