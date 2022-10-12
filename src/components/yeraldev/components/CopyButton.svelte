<script lang="ts">
	import { passwordGenerated, passwordSettings } from '../store'
	import { clipboard } from '../utils'
	import { PasswordSetting, GeneratorAlertStyle } from '../models'

	const setBackgroundColor = (passwordSettings: PasswordSetting) => {
		const length = passwordSettings.passwordLength.value
		let icon = GeneratorAlertStyle.success
		let card = GeneratorAlertStyle.successOpacity
		if (length < 12) {
			icon = GeneratorAlertStyle.warning
			card = GeneratorAlertStyle.warningOpacity
		}
		if (length < 6) {
			icon = GeneratorAlertStyle.danger
			card = GeneratorAlertStyle.dangerOpacity
		}
		return { icon, card }
	}
</script>

<section>
	<button
		style="
		--background-color:{setBackgroundColor($passwordSettings).icon}; 
		--opacity-background-color:{setBackgroundColor($passwordSettings).card}"
		on:click={() => clipboard($passwordGenerated)}
	>
		<span>
			{$passwordGenerated}
		</span>
	</button>
</section>

<style>
	section {
		display: block;
	}
	button {
		position: relative;
		display: grid;
		background-color: var(--opacity-background-color);
		align-items: center;
		height: 3rem;
		width: 100%;
		padding: 0.5rem;
		font-size: 1.5rem;
		max-width: calc(100vw - 2rem);
		border-radius: 0.5rem;
		overflow: hidden;
		text-shadow: inherit;
		box-shadow: var(--text-shadow-hover);
		transition: all 0.3s ease-in-out;
	}
	button::before,
	button::after {
		position: absolute;
		content: '';
		height: 2rem;
		width: 1.3rem;
		background-color: var(--background-color);
		top: 0.7rem;
		right: 0.5rem;
		border-radius: 0.25rem;
		border: 2px solid var(--color);
		box-shadow: inherit;
	}
	button::before {
		top: 0.35rem;
		right: 0.85rem;
	}
	button:hover {
		transform: scale(1.05);
		text-shadow: var(--text-shadow-hover);
	}
	button:active {
		transform: scale(1);
		text-shadow: var(--text-shadow-hover);
	}
	span {
		width: 90%;
		overflow: hidden;
	}
</style>
