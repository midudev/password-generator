<script setup lang="ts">
import ClipboardIcon from './ClipboardIcon.vue'
import {
	VALID_CHARACTERS_TO_USE,
	usePasswordGeneratorRepository
} from '../composables/password-generator-repository'

const {
	range,
	generatePassword,
	password,
	copyToClipboard,
	charactersToUse,
	onSelectedCharactersChange
} = usePasswordGeneratorRepository()
</script>

<template>
	<div class="h-screen w-screen flex justify-center items-center">
		<div class="w-80 bg-[#251b37] text-[#ffcaca] rounded-lg px-7 pt-10 pb-3">
			<div class="relative">
				<div class="w-full rounded-t-lg p-5 grid grid-cols-6 gap-2 absolute bottom-0 bg-[#372948]">
					<div class="col-span-5 max-w-xs break-all">
						{{ password }}
					</div>
					<div class="flex justify-end items-end">
						<ClipboardIcon @copy-to-clipboard="copyToClipboard" />
					</div>
				</div>
			</div>
			<button
				id="mke-generate-btn"
				class="w-full rounded-b-lg py-2 bg-[#372948] border-t-[0.5px] border-solid border-[#251b37]"
				@click="generatePassword"
			>
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
					<label class="w-full" for="a-z">{{ VALID_CHARACTERS_TO_USE.LOWERCASE }}</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="a-z"
						:value="VALID_CHARACTERS_TO_USE['LOWERCASE']"
						v-model="charactersToUse"
						:disabled="
							charactersToUse.length <= 1 &&
							charactersToUse.includes(VALID_CHARACTERS_TO_USE['LOWERCASE'])
						"
						@change="onSelectedCharactersChange"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="A-Z">{{ VALID_CHARACTERS_TO_USE.UPPERCASE }}</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="A-Z"
						:value="VALID_CHARACTERS_TO_USE.UPPERCASE"
						v-model="charactersToUse"
						:disabled="
							charactersToUse.length <= 1 &&
							charactersToUse.includes(VALID_CHARACTERS_TO_USE.UPPERCASE)
						"
						@change="onSelectedCharactersChange"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="0-9">{{ VALID_CHARACTERS_TO_USE.NUMBERS }}</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="0-9"
						:value="VALID_CHARACTERS_TO_USE.NUMBERS"
						v-model="charactersToUse"
						:disabled="
							charactersToUse.length <= 1 &&
							charactersToUse.includes(VALID_CHARACTERS_TO_USE.NUMBERS)
						"
						@change="onSelectedCharactersChange"
					/>
				</div>
				<div class="w-full flex justify-between mb-3 items-center">
					<label class="w-full" for="!@#$%^&*">{{
						VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS
					}}</label>
					<input
						type="checkbox"
						class="mke-checkbox h-2.5 w-2.5 appearance-none rounded-md outline-none border-8 border-solid border-white"
						id="!@#$%^&*"
						:value="VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS"
						v-model="charactersToUse"
						:disabled="
							charactersToUse.length <= 1 &&
							charactersToUse.includes(VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS)
						"
						@change="onSelectedCharactersChange"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
