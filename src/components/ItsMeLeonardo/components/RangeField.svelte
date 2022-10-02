<script lang="ts">
	export let min: number = 4
	export let max: number = 32
	export let value: number = 16
	let rangeProgress = (value / max) * 100
	$: rangeProgress = (value / max) * 100
</script>

<label class="w-full bg-purple-900/50 flex items-center gap-2 p-3">
	<span class="text-sm text-white font-light">{min}</span>
	<input
		class="range-input"
		type="range"
		style="--range-progress: {rangeProgress}%"
		bind:value
		{max}
		{min}
	/>
	<span class="text-sm text-white font-light">{max}</span>
</label>

<style>
	:root {
		--range-thumb-size: 2rem;
		--range-input-bg: #d8b4fe3b;
		--range-track-color: #9333ea;
		--range-thumb-color: var(--range-track-color);
		--range-track-height: 0.25rem;
		--range-thumb-color-active: #fff;
	}
	.range-input {
		position: relative;
		appearance: none;
		background: var(--range-input-bg);
		width: 100%;
		border-radius: 1rem;
		height: var(--range-track-height);
		cursor: pointer;
	}
	.range-input::after {
		content: '';
		position: absolute;
		background: var(--range-track-color);
		border-radius: 1rem;
		width: var(--range-progress);
		height: var(--range-track-height);
	}
	.range-input::-webkit-slider-thumb {
		appearance: none;
		position: relative;
		z-index: 1;
		background: var(--range-thumb-color) url('/ItsMeLeonardo/icons/arrow-slider.svg') no-repeat
			center;
		object-fit: cover;
		height: var(--range-thumb-size);
		width: var(--range-thumb-size);
		border-radius: 50%;
		transition: background-color 0.3s ease-in-out;
		cursor: grab;
	}
	.range-input:active.range-input::-webkit-slider-thumb {
		--Strong-Cyan: var(--range-thumb-color-active);
		cursor: grabbing;
	}
</style>
