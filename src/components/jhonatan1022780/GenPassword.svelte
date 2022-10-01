<script>
	import { store } from '@components/jhonatan1022780/store/store'
	let inputValue = 8

	const generatePassword = () => {
		let password = ''
		const options =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-='

		for (let i = 0; i < inputValue; i++) {
			password += options.charAt(Math.floor(Math.random() * options.length))
		}
		store.set(password)
	}
</script>

<div class="mt-4 px-5 py-3 bg-[#25232C] rounded-sm">
	<div class="flex justify-between w-full">
		<p>Character Length</p>
		<span class="text-[#90D498]">{inputValue}</span>
	</div>
	<form on:submit|preventDefault={generatePassword}>
		<input type="range" class="w-full mt-5" max="20" min="8" bind:value={inputValue} />
		<button class="bg-[#90D498] mt-6 w-full py-1 rounded-sm font-semibold">Generate Password</button
		>
	</form>
</div>

<style>
	input[type='range'] {
		display: block;
		width: 100%;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range'],
	input[type='range']::-webkit-slider-runnable-track,
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	input[type='range']::-webkit-slider-thumb {
		background-color: #e6e5ea;
		width: 15px;
		height: 15px;
		border: 3px solid #e6e5ea;
		border-radius: 50%;
		margin-top: -5px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background-color: #18171f;
		height: 6px;
	}
</style>
