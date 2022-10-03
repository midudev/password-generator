<script lang="ts">
	import { onMount } from 'svelte'

	import Title from '@components/ItsMeLeonardo/components/Title.svelte'
	import Section from '@components/ItsMeLeonardo/components/Section.svelte'
	import RangeField from '@components/ItsMeLeonardo/components/RangeField.svelte'
	import ToggleField from '@components/ItsMeLeonardo/components/ToggleField.svelte'

	import Button from '@components/ItsMeLeonardo/components/Button.svelte'
	import Toast from '@components/ItsMeLeonardo/components/Toast.svelte'

	import { generatePassword } from '@components/ItsMeLeonardo/utils/generatePassword'
	import { copy as copyClipboard } from '@components/ItsMeLeonardo/utils/navigator'

	let generatedPassword = ''

	let passwordLength = 16
	let includeUppercase = false
	let includeNumbers = true
	let includeSymbols = true
	let copyStatus: null | 'success' | 'error' = null

	function handleGeneratePassword() {
		const password = generatePassword({
			length: passwordLength,
			includeUppercase,
			includeNumbers,
			includeSymbols
		})
		generatedPassword = password
	}

	$: {
		const password = generatePassword({
			length: passwordLength,
			includeUppercase,
			includeNumbers,
			includeSymbols
		})
		generatedPassword = password
	}

	function copyPassword() {
		copyClipboard(generatedPassword)
			.then(() => {
				copyStatus = 'success'
			})
			.catch(() => {
				copyStatus = 'error'
			})

		setTimeout(() => {
			copyStatus = null
		}, 3000)
	}

	onMount(() => {
		handleGeneratePassword()
	})
</script>

<main class="container p-2">
	{#if copyStatus}
		<Toast
			message={copyStatus === 'success' ? 'Copied to clipboard' : 'Error copying to clipboard'}
			status={copyStatus}
		/>
	{/if}
	<section class="mx-auto w-full h-full max-w-[450px] flex items-center flex-col gap-4">
		<Title>Password Generator</Title>
		<Section>
			<h6 slot="title">
				Generated password <span class="text-xs text-white/50 capitalize ml-6">Click to copy</span>
			</h6>
			<button class="w-full bg-purple-900/50" on:click={copyPassword}>
				<p class="w-full text-neutral-200 flex justify-center items-center overflow-auto px-4 h-12">
					{generatedPassword}
				</p>
			</button>
		</Section>

		<Section>
			<span slot="title">Length: {passwordLength}</span>
			<RangeField bind:value={passwordLength} />
		</Section>

		<Section>
			<span slot="title">Settings</span>
			<ToggleField bind:value={includeNumbers}>
				<span slot="label">Include numbers</span>
			</ToggleField>

			<ToggleField bind:value={includeUppercase}>
				<span slot="label">Include capital letters</span>
			</ToggleField>

			<ToggleField bind:value={includeSymbols}>
				<span slot="label">Include special characters</span>
			</ToggleField>
		</Section>

		<Button on:click={handleGeneratePassword}>Change password</Button>
	</section>
</main>
