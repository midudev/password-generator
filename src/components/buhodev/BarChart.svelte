<script>
	export const numberOfCharacters = [4, 15, 8, 2]

	function calculateHeight(charOcurrences, passwordLength) {
		return (charOcurrences * 100) / passwordLength
	}
</script>

<div class="flex justify-between items-baseline">
	<div class="relative flex w-6 text-neutral-300 flex-col-reverse gap-2.5">
		{#each Array(7) as _, i}
			<span class="text-xs inset-x-0">{i * 5}</span>
		{/each}
	</div>
	<div class="w-full">
		<div class="relative flex px-4 gap-3 h-40 items-stretch w-full">
			{#each numberOfCharacters as number, i}
				<div class="flex flex-1 flex-col items-stretch justify-end">
					{#if number <= 3}
						<span class="text-center text-xs">{number}</span>
					{/if}
					<div
						class="bg-purple-500/80 border rounded-tl-sm rounded-tr-sm border-b-0 flex"
						style="flex-basis: {calculateHeight(numberOfCharacters[i], 30)}%"
					>
						{#if number > 3}
							<span class="w-full text-center text-xs">{number}</span>
						{/if}
					</div>
				</div>
			{/each}
			{#each Array(7) as _, i}
				<div
					class="absolute -z-10 inset-x-0 w-full border-dashed border-b border-neutral-500"
					style="top: {16.67 * i}%"
				/>
			{/each}
		</div>
		<div class="relative flex px-4 gap-4 items-stretch w-full text-sm text-neutral-300">
			<div class="flex flex-1 w-6 justify-center">a-z</div>
			<div class="flex flex-1 w-6 justify-center">A-Z</div>
			<div class="flex flex-1 w-6 justify-center">0-9</div>
			<div class="flex flex-1 w-6 justify-center">@#$%</div>
		</div>
	</div>
</div>
