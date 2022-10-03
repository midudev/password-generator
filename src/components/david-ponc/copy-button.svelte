<script lang="ts">
	import CheckIcon from './check-icon.svelte'
	import CopyIcon from './copy-icon.svelte'
	import IconButton from './icon-button.svelte'

	const TIMEOUT = 1500
	let copied = false
	export let password: string

	const handleCopy = () => {
		navigator.clipboard.writeText(password)
		copied = true
	}

	$: if (copied) {
		setTimeout(() => {
			copied = false
		}, TIMEOUT)
	}
</script>

<IconButton on:click={handleCopy} disabled={copied || !password}>
	{#if copied}
		<CheckIcon class="text-emerald-300" />
	{:else}
		<CopyIcon />
	{/if}
</IconButton>
