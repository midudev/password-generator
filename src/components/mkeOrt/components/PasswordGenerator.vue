<script setup lang="ts">
import ClipboardIcon from './ClipboardIcon.vue'
import {
	SPECIAL_CHARACTERS,
	usePasswordGeneratorRepository
} from '../composables/password-generator-repository'

const {
	range,
	generatePassword,
	password,
	copyToClipboard,
	charactersToUse,
	onSelectedCharactersChange,
	disableCheckbox
} = usePasswordGeneratorRepository()
</script>

<template>
	<div class="h-screen w-screen flex justify-center items-center">
		<div id="mke-generator-container" class="w-80 bg-white rounded-lg px-7 pt-10 pb-3">
			<div class="relative">
				<div
					id="mke-password-container"
					class="w-full rounded-t-lg p-5 grid grid-cols-6 gap-2 absolute bottom-0"
				>
					<div class="col-span-5 max-w-xs break-all">
						{{ password }}
					</div>
					<div class="flex justify-end items-end">
						<ClipboardIcon @copy-to-clipboard="copyToClipboard" />
					</div>
				</div>
			</div>
			<button id="mke-generate-btn" class="w-full rounded-b-lg py-2" @click="generatePassword">
				Generate
			</button>
			<input
				type="range"
				class="w-full mt-5"
				v-model="range"
				min="5"
				max="128"
				@input="generatePassword"
			/>
			<div class="flex justify-end">
				<small>{{ range }}</small>
			</div>
			<div class="mt-1">
				<div class="w-full flex justify-between py-3 items-center">
					<label class="w-full" for="a-z">a-z</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="a-z"
						value="a-z"
						v-model="charactersToUse.useLowerCase"
						@change="onSelectedCharactersChange"
						:disabled="disableCheckbox(charactersToUse.useLowerCase)"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="A-Z">A-Z</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="A-Z"
						value="A-Z"
						v-model="charactersToUse.useUpperCase"
						@change="onSelectedCharactersChange"
						:disabled="disableCheckbox(charactersToUse.useUpperCase)"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="0-9">0-9</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="0-9"
						value="0-9"
						v-model="charactersToUse.useNumbers"
						@change="onSelectedCharactersChange"
						:disabled="disableCheckbox(charactersToUse.useNumbers)"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="!@#$%^&*">{{ SPECIAL_CHARACTERS }}</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="!@#$%^&*"
						value="!@#$%^&*"
						v-model="charactersToUse.useSpecialCharacters"
						@change="onSelectedCharactersChange"
						:disabled="disableCheckbox(charactersToUse.useSpecialCharacters)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#mke-generator-container {
	background-color: #251b37;
	color: #ffcaca;
}

#mke-password-container {
	background-color: #372948;
}

#mke-generate-btn {
	background-color: #372948;
	border-top: 0.5px solid #251b37;
}

#mke-generate-btn:active {
	color: #372948;
}

.mke-checkbox:disabled {
	border: 8px solid gray !important;
	cursor: not-allowed;
}

.mke-checkbox:checked {
	border: 8px solid #372948;
}
</style>
