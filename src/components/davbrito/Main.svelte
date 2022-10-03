<script type="ts">
	import CopyClipboardButton from '@components/davbrito/CopyClipboardButton.svelte'
	import Password from '@components/davbrito/Password.svelte'
	import { generatePassword } from './util'

	let size = 8

	$: password = generatePassword(size)
</script>

<div
	class="background flex flex-col justify-center items-center h-full p-4 bg-gradient-to-br from-purple-500 to-pink-500"
>
	<article
		class="shadow-lg shadow-purple-900/40 w-full max-w-md p-5 rounded-md bg-slate-600 text-neutral-50 accent-violet-900"
	>
		<header class="mb-4">
			<h2 class="font-bold text-2xl">Generador de contraseñas</h2>
		</header>
		<form class="flex flex-col gap-2 items-stretch" on:submit|preventDefault>
			<label class="text-slate-300 text-sm">
				<div>Longitud:</div>
				<div class="flex gap-2">
					<input class="flex-grow" type="range" min={6} max={50} bind:value={size} />
					{size}
				</div>
			</label>
			<div>
				<div class="mb-1 text-slate-300 text-sm">Contraseña:</div>
				<div class="flex gap-2 items-center">
					<Password value={password} />
					<CopyClipboardButton value={password} />
				</div>
			</div>
		</form>
	</article>
</div>
