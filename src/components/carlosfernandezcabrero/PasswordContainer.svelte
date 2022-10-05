<script>
	import CopyButton from './CopyButton.svelte'

	const randomSet = {
		basic: '!@¡#$%&*()_+-{}[]:;.?¿,<>/|=€ªº·~^`´0123456789',
		lowerCase: 'abcdefghijklmnopqrstuvwxyz',
		upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	}
	const passwordLengthValues = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

	let password = ''
	let length = 8
	let caseSensitive = 1

	const getRandomNumber = (dataSet) => Math.floor(Math.random() * dataSet.length)

	function generatePassword() {
		let randomSetElected
		if (caseSensitive === 1)
			randomSetElected = randomSet.basic + randomSet.lowerCase + randomSet.upperCase
		if (caseSensitive === 2) randomSetElected = randomSet.basic + randomSet.upperCase
		if (caseSensitive === 3) randomSetElected = randomSet.basic + randomSet.lowerCase

		password = ''
		for (let i = 0; i < length; i++) {
			const randomNumber = getRandomNumber(randomSetElected)
			password += randomSetElected[randomNumber]
		}
	}

	generatePassword()
</script>

<div class="flex flex-col items-center gap-y-14 w-full">
	<div class="flex flex-col gap-y-4 items-center justify-center lg:flex-row lg:gap-x-4 w-full">
		<p
			class="bg-[#F0F5F9] text-[#1E2022] text-5xl py-[25px] px-12 rounded-full text-center w-full lg:w-9/12 sm:w-11/12 font-['ShareTechMono']"
		>
			{password}
		</p>
		<CopyButton textToCopy={password} />
	</div>
	<div class="flex flex-col items-start gap-y-2 sm:flex-row sm:gap-x-12 sm:items-center">
		<fieldset class="flex items-center gap-x-2">
			<input
				type="radio"
				bind:group={caseSensitive}
				name="case"
				id="case"
				value={1}
				class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
			/>
			<label for="case" class="text-xl">Ambas</label>
		</fieldset>
		<fieldset class="flex items-center gap-x-2">
			<input
				type="radio"
				bind:group={caseSensitive}
				name="case"
				id="uppercase"
				value={2}
				class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
			/>
			<label for="uppercase" class="text-xl">Mayúsculas</label>
		</fieldset>
		<fieldset class="flex items-center gap-x-2">
			<input
				type="radio"
				bind:group={caseSensitive}
				name="case"
				id="lowercase"
				value={3}
				class="appearance-none rounded-full h-6 w-6 border-[3px] border-neutral-200 bg-neutral-200 checked:bg-[#FC5185]"
			/>
			<label for="lowercase" class="text-xl">Minúsculas</label>
		</fieldset>
	</div>
	<div class="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-4">
		<fieldset class="flex flex-col items-center w-9/12 pt-3 px-2">
			<input
				type="range"
				class="bg-transparent w-full mb-4"
				min={passwordLengthValues[0]}
				max={passwordLengthValues.at(-1)}
				list="range-values"
				bind:value={length}
			/>
			<datalist
				id="range-values"
				class="flex items-center justify-start lg:gap-x-[1rem] sm:gap-x-[0.6rem] w-full"
			>
				{#each passwordLengthValues as value}
					<option
						{value}
						class={`bg-gray-300 rounded-full text-black font-medium text-lg h-7 w-7 flex items-center justify-center ${
							value % 2 !== 0 ? 'invisible' : ''
						}`}>{value}</option
					>
				{/each}
			</datalist>
		</fieldset>
		<output class="text-5xl bg-gray-800 rounded-full h-20 w-20 flex justify-center items-center"
			>{length}</output
		>
	</div>

	<button
		class="text-2xl bg-[#007AB5] hover:bg-[#005A85] border-4 border-[#007AB5] active:bg-[#004262] active:border-[#004262] py-3 px-8 rounded-full"
		on:click={generatePassword}
	>
		Crear contraseña
	</button>
</div>

<style>
	@font-face {
		font-family: 'ShareTechMono';
		src: url('/public/carlosfernandezcabrero/ShareTechMono-Regular.ttf');
	}

	input[type='range'] {
		appearance: none;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		transform: scale(1.3);
	}

	input[type='range']::-moz-range-thumb:hover {
		transform: scale(1.3);
	}

	input[type='range']::-webkit-slider-thumb {
		transition: transform 0.1s ease-in;
		appearance: none;
		width: 30px;
		height: 30px;
		background: #007ab5;
		border-radius: 50%;
		cursor: pointer;
		margin-top: -11px;
	}

	input[type='range']::-moz-range-thumb {
		border: none;
		transition: transform 0.1s ease-in;
		appearance: none;
		width: 30px;
		height: 30px;
		background: #007ab5;
		border-radius: 50%;
		cursor: pointer;
		margin-top: -11px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		appearance: none;
		width: 100%;
		height: 10px;
		cursor: pointer;
		box-shadow: 1px 2px 1px #000;
		background: #d1d5db;
		border-radius: 5px;
		border: 1px solid #000;
	}

	input[type='range']::-moz-range-track {
		appearance: none;
		width: 100%;
		height: 10px;
		cursor: pointer;
		box-shadow: 1px 2px 1px #000;
		background: #d1d5db;
		border-radius: 5px;
		border: 1px solid #000;
	}
</style>
