import { onMounted, ref } from 'vue'

const INITIAL_RANGE_VALUE = 5

export const VALID_CHARACTERS_TO_USE = Object.freeze({
	LOWERCASE: 'a-z',
	UPPERCASE: 'A-Z',
	NUMBERS: '0-9',
	SPECIAL_CHARACTERS: '!@#$%^&*()='
})

const generateCharacterRange = (startFrom: number, quantity: number) =>
	Array(quantity)
		.fill('')
		.map((_, index) => String.fromCharCode(index + startFrom))

const generateCharactersArray = (charactersToUse: string[]) => {
	const characterToUse = []
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.LOWERCASE)) {
		characterToUse.push(...generateCharacterRange(97, 26)) // a-z
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.UPPERCASE)) {
		characterToUse.push(...generateCharacterRange(65, 26)) // A-Z
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.NUMBERS)) {
		characterToUse.push(...generateCharacterRange(48, 10)) // 0-9
	}
	if (charactersToUse.includes(VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS)) {
		characterToUse.push(...VALID_CHARACTERS_TO_USE.SPECIAL_CHARACTERS.split('')) // special characters
	}
	return characterToUse.sort(() => (Math.random() > 0.5 ? 1 : -1)) as string[]
}

export const usePasswordGeneratorRepository = () => {
	const charactersToUse = ref<string[]>(['a-z'])
	const characters = ref<string[]>(generateCharactersArray(charactersToUse.value))
	const range = ref(INITIAL_RANGE_VALUE)
	const password = ref('')

	const generatePassword = () => {
		password.value = ''
		for (let i = 0; i < range.value; i++) {
			password.value += characters.value[parseInt(`${Math.random() * characters.value.length}`, 10)]
		}
	}

	const onSelectedCharactersChange = () => {
		characters.value = generateCharactersArray(charactersToUse.value)
		generatePassword()
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password.value)
	}

	onMounted(() => {
		generatePassword()
	})

	return {
		range,
		password,
		generatePassword,
		copyToClipboard,
		onSelectedCharactersChange,
		charactersToUse
	}
}
