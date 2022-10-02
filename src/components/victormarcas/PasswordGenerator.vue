<script setup>
import { ref } from 'vue'
import Layout from './Layout.vue'
import CopyIcon from './icons/CopyIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
const minLenghtPassword = 6
const maxLenghtPassword = 20
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
const showMessageClipboard = ref(false)
const password = ref('')
const rangeLenghtPassword = ref(minLenghtPassword)

const handleGeneratePassword = () => {
	password.value = Array.from({ length: rangeLenghtPassword.value })
		.map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
		.join('')
}

const handleCopyPassword = () => {
	navigator.clipboard.writeText(password.value).then(() => {
		showMessageClipboard.value = true
		const timeout = window.setTimeout(() => {
			showMessageClipboard.value = false
			window.clearTimeout(timeout)
		}, 1000)
	})
}
</script>
<template>
	<Layout>
		<template #title>Password Generator</template>
		<template #content>
			<form @submit.prevent="handleGeneratePassword">
				<div class="flex gap-4 items-end">
					<div class="flex-grow">
						<label for="minmax-range" class="block py-2 text-sm font-medium text-gray-300"
							>Character Length</label
						>
						<input
							id="minmax-range"
							type="range"
							v-model="rangeLenghtPassword"
							:min="minLenghtPassword"
							:max="maxLenghtPassword"
							class="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
						/>
					</div>
					<div class="font-bold w-14 text-right text-3xl text-[#5FE79C]">
						{{ rangeLenghtPassword }}
					</div>
				</div>
				<div class="flex items-center gap-4 mt-4">
					<div class="relative flex-1">
						<input
							type="text"
							v-model="password"
							readonly
							placeholder="P4$5W0rD!"
							class="rounded w-full border border-[#222528] p-4 leading-6 text-base focus:outline-none placeholder:text-gray-500 text-gray-400 bg-transparent"
						/>
						<transition
							enter-active-class="transition-all duration-150 transform ease-out-quad"
							leave-active-class="transition-all duration-200 transform ease-in-quad"
							enter-class="opacity-0"
							enter-to-class="opacity-100"
							leave-class="opacity-100"
							leave-to-class="opacity-0"
							appear
						>
							<span
								v-if="showMessageClipboard"
								class="absolute inset-x-0 top-full mt-1 text-[#5FE79C] text-xs"
								>Copied to clipboard</span
							>
						</transition>
					</div>
					<button
						type="button"
						class="shrink-0 inline-flex items-center justify-center text-[#5FE79C] disabled:text-gray-700 hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out disabled:scale-100 focus:outline-none"
						@click="handleCopyPassword"
						:disabled="!password"
					>
						<CopyIcon class="w-8 h-8" />
					</button>
				</div>
				<button
					type="submit"
					class="flex w-full gap-4 rounded mt-7 uppercase text-base text-[#111418] items-center font-bold justify-center leading-6 py-3 px-6 bg-[#5FE79C] hover:bg-[#5FE79C]/95 transition-colors focus:outline-none"
				>
					Generate
					<ArrowRightIcon class="w-4 h-4" />
				</button>
			</form>
		</template>
	</Layout>
</template>
<style>
input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #5fe79c;
	cursor: pointer;
}
</style>
