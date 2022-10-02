<script setup>
	import { ref } from 'vue'
	import { formStore } from '@components/renatomendozac/store'

	const CharacterLength = ref("4")

	function onChange(event) {
		const rangeValue = event.target.value
		CharacterLength.value = rangeValue

		formStore.update({ length: parseInt(rangeValue) })
	}
</script>

<template>
	<main class='bg-slate-500 p-2 text-slate-50'>
		<div class="flex justify-between items-center mb-3">
			<h2 class="text-sm">
				Character length
			</h2>
			<span class="text-green-300 text-xl font-bold">
				{{ CharacterLength }}
			</span>
		</div>
		<input class="slider" type="range" :value="CharacterLength" min="4" max="20" @change="onChange" />
	</main>
</template>

<style>
	.slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 6px;
		background: #c92626c7;
		outline: none;
		opacity: 0.7;
		-webkit-transition: .2s;
		transition: opacity .2s;
		border-radius: 1px;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 18px;
		height: 18px;
		background: #04ff53;
		cursor: pointer;
		border-radius: 12px;
	}

	.slider::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: #04ff53;
		cursor: pointer;
		border-radius: 12px;
	}
</style>