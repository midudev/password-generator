<script lang="ts">
	import { useHistory } from '@hooks/fredoist/use-history'

	const history = useHistory()
</script>

<div>
	<h3 class="uppercase text-xl font-semibold tracking-widest">Password History</h3>
	<div class="my-8 flex flex-col gap-5 overflow-y-auto max-h-64">
		{#each $history as password}
			<div class="flex items-center justify-between gap-5">
				<span class="truncate flex-1">{password}</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 512 512">
					<path
						d="M456 480H136a24 24 0 01-24-24V128a16 16 0 0116-16h328a24 24 0 0124 24v320a24 24 0 01-24 24z"
					/>
					<path
						d="M112 80h288V56a24 24 0 00-24-24H60a28 28 0 00-28 28v316a24 24 0 0024 24h24V112a32 32 0 0132-32z"
					/>
				</svg>
			</div>
		{/each}
	</div>
	{#if $history.length > 0}
		<button
			type="button"
			class="w-full py-1 px-2 text-center text-[#f8ef00] tracking-widest"
			on:click={history.clear}>Clear history</button
		>
	{/if}
</div>
