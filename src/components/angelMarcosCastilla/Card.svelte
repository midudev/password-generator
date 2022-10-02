<script>
	import { onMount } from 'svelte'
	import Button from './Button.svelte'
	import Slide from './Slide.svelte'
	import TextCopy from './TextCopy.svelte'

	let passwordCaracteres =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+/.,;:[]{}'
	let lengthPassword
	let generatedpassword

	const generatePassword = (lengthPassword) => {
		let password = ''
		for (let i = 0; i < lengthPassword; i++) {
			let indexRandom = Math.floor(Math.random() * passwordCaracteres.length)
			password += passwordCaracteres.charAt(indexRandom)
		}
		generatedpassword = password
	}

	onMount(() => {
		generatePassword(lengthPassword)
	})
</script>

<div class="bg-slate-900 m-auto w-[600px] py-8 px-6 rounded-md min-h-[300px] text-white">
	<TextCopy {generatedpassword} />
	<Slide bind:length={lengthPassword} />
	<Button on:click={() => generatePassword(lengthPassword)} />
</div>
