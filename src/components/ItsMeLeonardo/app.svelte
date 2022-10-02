<script lang="ts">
	import Title from '@components/ItsMeLeonardo/components/Title.svelte'
	import Section from '@components/ItsMeLeonardo/components/Section.svelte'
	import RangeField from '@components/ItsMeLeonardo/components/RangeField.svelte'
	import ToggleField from '@components/ItsMeLeonardo/components/ToggleField.svelte'

	import Button from '@components/ItsMeLeonardo/components/Button.svelte'

	let passwordLength = 16
</script>

<main class="container p-2">
	<form class="mx-auto w-full h-full max-w-[500px] flex items-center flex-col gap-4">
		<Title>Password Generator</Title>
		<Section>
			<h6 slot="title">Generated password</h6>
			<div class="w-full bg-purple-900/50">
				<p class="w-full px-4 py-3 text-neutral-200 text-center">afñakfña9878ñ</p>
			</div>
		</Section>

		<Section>
			<span slot="title">Length: {passwordLength}</span>
			<RangeField bind:value={passwordLength} />
		</Section>

		<Section>
			<span slot="title">Settings</span>
			<ToggleField>
				<span slot="label">Include numbers</span>
			</ToggleField>

			<ToggleField>
				<span slot="label">Include capital letters</span>
			</ToggleField>

			<ToggleField>
				<span slot="label">Include special characters</span>
			</ToggleField>
		</Section>

		<Button>Generate password</Button>
	</form>
</main>
