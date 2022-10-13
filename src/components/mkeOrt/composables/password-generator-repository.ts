import { computed, onMounted, reactive, ref } from 'vue'

export const SPECIAL_CHARACTERS = '!@#$%^&*()='
const INITIAL_RANGE_VALUE = 5

interface CharactersToUse {
	useLowerCase: boolean
	useUpperCase: boolean
	useNumbers: boolean
	useSpecialCharacters: boolean
}

const generateCharacterRange = (startFrom: number, quantity: number) =>
	Array(quantity)
		.fill('')
		.map((_, index) => String.fromCharCode(index + startFrom))

const generateCharactersArray = ({
	useLowerCase,
	useUpperCase,
	useNumbers,
	useSpecialCharacters
}: CharactersToUse) => {
	const characterToUse = []
	if (useLowerCase) characterToUse.push(...generateCharacterRange(97, 26)) // a-z
	if (useUpperCase) characterToUse.push(...generateCharacterRange(65, 26)) // A-Z
	if (useNumbers) characterToUse.push(...generateCharacterRange(48, 10)) // 0-9
	if (useSpecialCharacters) characterToUse.push(...SPECIAL_CHARACTERS.split('')) // special characters
	return characterToUse.sort(() => (Math.random() > 0.5 ? 1 : -1)) as string[]
}

export const usePasswordGeneratorRepository = () => {
	const charactersToUse: CharactersToUse = reactive({
		useLowerCase: true,
		useUpperCase: false,
		useNumbers: false,
		useSpecialCharacters: false
	})

	const characters = ref<string[]>(generateCharactersArray(charactersToUse))
	const range = ref(INITIAL_RANGE_VALUE)
	const password = ref('')

	const selectedCharactersCount = computed(
		() => Object.values(charactersToUse).filter((el) => el).length
	)

	const generatePassword = () => {
		password.value = ''
		for (let i = 0; i < range.value; i++) {
			password.value += characters.value[parseInt(`${Math.random() * characters.value.length}`, 10)]
		}
	}

	const onSelectedCharactersChange = () => {
		characters.value = generateCharactersArray(charactersToUse)
		generatePassword()
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password.value)
	}

	const disableCheckbox = (currentItemSelection: boolean) =>
		selectedCharactersCount.value === 1 && currentItemSelection

	onMounted(() => {
		generatePassword()
	})

	return {
		range,
		password,
		generatePassword,
		copyToClipboard,
		onSelectedCharactersChange,
		charactersToUse,
		disableCheckbox
	}
}
