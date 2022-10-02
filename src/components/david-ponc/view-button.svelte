<script lang="ts">
	import EyeClosedIcon from './eye-closed-icon.svelte'
	import EyeIcon from './eye-icon.svelte'
	import IconButton from './icon-button.svelte'

	export let reveal: boolean

	const handleToggle = () => {
		reveal = !reveal
	}
</script>

<IconButton on:click={handleToggle}>
	{#if reveal}
		<EyeClosedIcon />
	{:else}
		<EyeIcon />
	{/if}
</IconButton>
