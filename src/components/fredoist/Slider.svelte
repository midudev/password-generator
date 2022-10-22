<script type="ts">
	import { usePassword } from '@hooks/fredoist/use-password'

	const password = usePassword()
	$: bubblePosition = (($password.length - 8) * 100) / (100 - 8)

	async function updateLength(event: Event) {
		const input = event.target as HTMLInputElement
		length = parseInt(input.value)
		password.update({ length })
		password.generate()
	}
</script>

<div class="relative my-16">
	<output
		for="length"
		class="absolute w-5 text-center text-xs font-[Barlow,sans-serif] leading-none -top-5"
		style={`left: calc(${bubblePosition}% + (${0 - bubblePosition * 0.15}px))`}
	>
		{$password.length}
	</output>
	<input
		type="range"
		name="length"
		value={$password.length}
		min="8"
		max="100"
		data-length={$password.length}
		class="appearance-none h-1 bg-[#00f0ff] w-full"
		on:input={updateLength}
	/>
</div>

<style>
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 1.25rem;
		height: 1.25rem;
		background: #f8ef00;
		cursor: pointer;
		position: relative;
	}
</style>
