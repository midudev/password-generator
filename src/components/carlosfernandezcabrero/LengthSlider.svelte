<script>
	export let length = 8

	const passwordLengthValues = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
</script>

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

<style>
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
