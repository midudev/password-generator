<script>
	import { fly } from 'svelte/transition'

	export let generatedpassword = ''
	let isCopied = false

	const copyPassword = () => {
		isCopied = true
		navigator.clipboard.writeText(generatedpassword)
		setTimeout(() => {
			isCopied = false
		}, 400)
	}
</script>

<div class="w-full py-4 bg-slate-800 px-6 flex items-center rounded-md mb-6">
	<span class="flex-1 tracking-widest text-lg">{generatedpassword}</span>
	<button
		on:click={copyPassword}
		class="flex items-center gap-1 hover:text-blue-400 active:opacity-[.8] relative"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
			/>
		</svg>
		<span>Copy</span>
		{#if isCopied}
			<span
				transition:fly={{ y: 50, duration: 400 }}
				class=" textSuccessCopy p-1 px-2 rounded-md  z-2 -top-10 bg-white text-sm absolute text-green-500"
				>Copied
			</span>
		{/if}
	</button>
</div>

<style>
	.textSuccessCopy {
		color: green;
	}
</style>
