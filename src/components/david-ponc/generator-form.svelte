<script lang="ts">
	import CopyButton from './copy-button.svelte'
	import { generatePassword } from './generate-password'
	import InputRange from './input-range.svelte'
	import RocketIcon from './rocket-icon.svelte'
	import ViewButton from './view-button.svelte'

	let length = 8
	let revealText = false
	let password = ''

	const handleGenerate = () => {
		password = generatePassword(length)
	}
</script>

<form
	on:submit|preventDefault={handleGenerate}
	class="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4 shadow-2xl shadow-indigo-500/10"
>
	<h1
		class="text-2xl font-semibold text-center text-transparent bg-gradient-to-r from-indigo-50 to-indigo-300 bg-clip-text"
	>
		Generador
	</h1>

	<InputRange bind:length />
	<button
		class="px-6 py-3 rounded-lg bg-gradient-to-b from-indigo-400 to-indigo-600 text-sm font-medium flex items-center justify-center gap-3 transition-all hover:from-indigo-00 hover:to-indigo-500 active:scale-x-95 active:scale-y-95 active:translate-y-0.5"
	>
		<RocketIcon /> Generar
	</button>
	<section class="flex items-center rounded-lg bg-black/30 p-1.5 gap-1.5">
		<input
			readonly
			value={password}
			placeholder="Contraseña secreta"
			type={revealText ? 'text' : 'password'}
			class="w-full bg-transparent h-full outline-none font-sans text-lg pl-4 text-indigo-200 placeholder:text-zinc-600"
		/>
		<ViewButton bind:reveal={revealText} />
		<CopyButton bind:password />
	</section>
</form>
