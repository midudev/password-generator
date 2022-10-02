<script>
	import { store } from '@components/jhonatan1022780/store/store'
  import CopyIcon from './Ui/CopyIcon.svelte'
	let password = ''
	let isCopied = false

	store.subscribe((value) => (password = value))

	const copyToClipboard = () => {
		if (password) {
			navigator.clipboard.writeText(password)
		}
		isCopied = true
		setTimeout(() => {
			isCopied = false
		}, 2100)
	}
</script>

<div class="relative">
	<div class="bg-[#25232C] items-center rounded-sm flex justify-between px-5 py-3">
		{#if password}
			<p class="text-lg font-medium">{password}</p>
		{:else}
			<p class="text-lg font-medium text-slate-400">Password</p>
		{/if}
		<div class="w-5 cursor-pointer" on:click={copyToClipboard}>
			<CopyIcon />
		</div>
	</div>
	<div class={`absolute top-0 left-0 w-full h-full bg-green-300 hidden ${isCopied && 'msg'}`}>
		<p class="text-black">
			{#if password}
				copied
			{:else}
				nothing to copy
			{/if}
		</p>
	</div>
</div>

<style is:global>
	.msg {
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn 3s ease;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
