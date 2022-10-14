import { onMounted, ref } from 'vue'

export const SPECIAL_CHARACTERS = '!@#$%^&*()='
const INITIAL_RANGE_VALUE = 5

const generateCharacterRange = (startFrom: number, quantity: number) =>
	Array(quantity)
		.fill('')
		.map((_, index) => String.fromCharCode(index + startFrom))

const generateCharactersArray = (charactersToUse: string[]) => {
	const characterToUse = []
	if (charactersToUse.includes('a-z')) characterToUse.push(...generateCharacterRange(97, 26)) // a-z
	if (charactersToUse.includes('A-Z')) characterToUse.push(...generateCharacterRange(65, 26)) // A-Z
	if (charactersToUse.includes('0-8')) characterToUse.push(...generateCharacterRange(48, 10)) // 0-9
	if (charactersToUse.includes('!@#$%^&*')) characterToUse.push(...SPECIAL_CHARACTERS.split('')) // special characters
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
