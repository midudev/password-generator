<template>
	<div class="flex justify-center items-center w-full">
		<Transition>
			<div v-if="copied" class="absolute top-1 bg-gray-700 text-gray-200 p-2 rounded">Copiado!</div>
		</Transition>
	</div>

	<main class="flex justify-center items-center w-full h-screen flex-col text-center">
		<header class="px-9 py-3 bg-gray-700 w-1/3">
			<h1 class="text-3xl text-gray-200">{{ title }}</h1>
		</header>
		<section class="px-9 py-3 bg-gray-700 w-1/3">
			<div class="flex items-center justify-center w-full my-4">
				<input type="text" :value="input" readonly class="p-2 w-2/3" />
				<button class="bg-slate-400 p-2" @click="copy">
					<Icono />
				</button>
			</div>
			<div class="w-full">
				<input type="range" v-model="rango" max="50" min="4" />
				<p class="text-white">{{ rango }} caracteres</p>
			</div>
			<div>
				<button @click="generate" class="bg-slate-400 p-2 rounded w-1/3 hover:bg-slate-300">
					Generar
				</button>
			</div>
		</section>
	</main>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { usePasswordGenerator } from '../composables/usePasswordGenerator'
import { useCopyText } from '../composables/useCopyText'
import Icono from '../icono/Icono.vue'

defineProps({
	title: {
		type: String,
		required: true
	}
})

const input = ref()
const rango = ref(4)
const copied = ref(false)
const { generatePassword, generatePasswordWithSymbols } = usePasswordGenerator()
const { copyText } = useCopyText()
const generate = () => {
	input.value = generatePasswordWithSymbols(rango.value)
}
const copy = () => {
	copyText(input.value)
	copied.value = true
	setTimeout(() => {
		copied.value = false
	}, 1000)
}
</script>
