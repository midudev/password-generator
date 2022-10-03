<script>
	import ContentCopy from './Assets/ContentCopy.svelte'
	import Check from './Assets/Check.svelte'

	let password = ''
	let passwordLength = 6
	let isSpecial = true
	let isCopied = false

	const normalCharacters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

	const specialCharacters = '@:;#&-?/%+*{}[]()|\<>$!'

	const getRandomString = () => {
		var characterList = normalCharacters

		if (password.length > 0) {
			password = ''
		}

		if (isSpecial) {
			characterList += specialCharacters
		}

		for ( let iter = 0 ; iter < passwordLength; iter++) {
			var index = Math.floor(Math.random() * characterList.length)
			password += characterList[index]	
		}
	}

	const onSliderChange = (e) => {
		passwordLength = e.target.value
		getRandomString()
	}

	const copyToClipboard = () => {
		if(password.length > 0) {
			navigator.clipboard.writeText(password)
			isCopied = true
			setTimeout(() => {
				isCopied = false
			}, 1000)
		}
	}
</script>

<div class="flex flex-col gap-12 items-center">
	<div
		class="bg-[#427AA150] h-12 w-[478px] p-5 border-2 border-[#427AA1] rounded-lg flex flex-row space-x-40 items-center shadow-md shadow-black/25"
	>
		<input
			readonly
			type="text"
			name="password"
			id="password"
			placeholder="Your Password"
			maxlength="20"
			minlength="6"
			bind:value={password}
			class="h-12 bg-transparent focus:outline-none"
		/>
		<button on:click={copyToClipboard}>
			{#if isCopied}
				<Check />
			{:else}
				<ContentCopy />
			{/if}
		</button>
	</div>

	<div>
		<input
			type="range"
			name="slide"
			id="slide"
			min="6"
			max="20"
			bind:value={passwordLength}
			on:change={onSliderChange}
			class="input-range p-1.5"
		/>
		<span>{passwordLength}</span>
	</div>

	<button
		class="h-12 w-44 text-white bg-[#427AA1] rounded-lg active:bg-[#3B6D91] focus:ring-4 focus:ring-[#6097BE]"
		on:click={getRandomString}
		>
		Generate password
	</button>
</div>

<style>
	.input-range {
		-webkit-appearance: none;
		outline: 0;
		background: transparent;
		width: 478px;
	}

	.input-range::-webkit-slider-runnable-track {
		height: 2px;
		background: #272727;
		border: none;
		border-radius: 3px;
	}

	.input-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #fff;
		margin-top: -7px;
		vertical-align: middle;
		border: 5px solid #427aa1;
		transition: 0.15s;
	}

	.input-range::-webkit-slider-thumb:active {
		height: 20px;
		width: 20px;
		margin-top: -9px;
	}
</style>
