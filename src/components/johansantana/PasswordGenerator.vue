<script setup>
import { ref, computed } from 'vue'
import TooltipMessage from '@components/johansantana/TooltipMessage.vue'
import WarningMessage from '@components/johansantana/WarningMessage.vue'
import GithubIcon from '@components/johansantana/icons/GithubIcon.vue'
import CopyIcon from '@components/johansantana/icons/CopyIcon.vue'
import CheckIcon from '@components/johansantana/icons/CheckIcon.vue'

const MIN_LENGTH = 6
const MAX_LENGTH = 24
const PASSWORD_CHARACTERS =
	'0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/*
	MAX_LENGTH / 2 + MIN_LENGTH / 2 --> sets the initial value
	to the middle of the input range
*/
const passwordLength = ref(MAX_LENGTH / 2 + MIN_LENGTH / 2)
const password = ref('')

const passwordLengthNumber = computed(() => {
	return Number(passwordLength.value)
})

const newPassword = (number) => {
	const emptyArray = [...Array(number)]
	password.value = emptyArray
		.map((x) => {
			const randomIndex = Math.floor(Math.random() * PASSWORD_CHARACTERS.length)
			return PASSWORD_CHARACTERS.charAt(randomIndex)
		})
		.join('')
}

const showTooltipMessage = ref(false)
const warningMessage = ref(false)

const handleCopy = () => {
	if (!password.value) {
		warningMessage.value = 'Generate a password before copying.'
		const warningTimeout = window.setTimeout(() => {
			warningMessage.value = ''
			window.clearTimeout(warningTimeout)
		}, 3000)
		return
	}
	navigator.clipboard.writeText(password.value).then(() => {
		showTooltipMessage.value = true
		const tooltipTimeout = window.setTimeout(() => {
			showTooltipMessage.value = false
			window.clearTimeout(tooltipTimeout)
		}, 2000)
	})
}
</script>

<template>
	<div class="flex flex-col gap-10 relative">
		<WarningMessage v-if="warningMessage" :message="warningMessage" />
		<!-- Generator -->
		<div class="py-10 flex flex-col">
			<h1
				class="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-pink-500 mb-4"
			>
				Password Generator
			</h1>
			<p class="text-gray-200/50 mb-2 mx-auto before:content-['-'] after:content-['-'] after:ml-2">
				Select your <span class="text-gray-200/80">password length</span>
			</p>
			<div class="mb-6 flex gap-6 items-center">
				<input
					id="range"
					type="range"
					:min="MIN_LENGTH"
					:max="MAX_LENGTH"
					v-model="passwordLength"
					class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none"
				/>
				<span class="text-white font-bold text-3xl">{{ passwordLength }}</span>
			</div>
			<button
				class="px-6 bg-blue-700 rounded-full py-3 text-white text-lg mb-6 hover:scale-105 hover:bg-blue-600 transition outline-8 outline-offset-4"
				@click="newPassword(passwordLengthNumber)"
			>
				Generate!
			</button>
			<div class="flex gap-3">
				<input
					type="text"
					:value="password"
					placeholder="here goes your password..."
					readonly
					class="bg-transparent border-2 border-white text-white placeholder-gray-400 rounded-lg focus:outline-none block w-full p-3"
				/>
				<button
					class="bg-transparent relative border-2 border-white p-2 px-3 rounded-lg text-white hover:bg-white hover:scale-110 hover:text-gray-700 focus:outline-none transition"
					@click="handleCopy"
				>
					<CopyIcon />

					<TooltipMessage v-if="showTooltipMessage" message="Copied!">
						<CheckIcon class="text-green-400" />
					</TooltipMessage>
				</button>
			</div>
		</div>

		<!-- Footer -->
		<footer
			class="py-10 text-white flex flex-col items-center gap-6 border-t-8 border-dashed border-gray-400/20"
		>
			<div class="w-fit">
				<img src="/logo.svg" alt="HacktoberFest Logo" class="w-60 opacity-70" />
			</div>
			<div class="w-fit">
				<a
					href="https://github.com/johansantana"
					class="flex gap-3 p-2 hover:bg-slate-50/10 rounded-full transition"
					target="_blank"
					rel="noopener"
				>
					<GithubIcon />
					@johansantana
				</a>
			</div>
		</footer>
	</div>
</template>

<style scoped>
h1 {
	font-family: 'Inter', sans-serif;
}

input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 24px;
	height: 24px;
	border-radius: 999%;
	background-color: white;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

input[type='range']:hover::-webkit-slider-thumb {
	border-radius: 999%;
	background-color: rgb(200, 200, 200);
}
</style>
