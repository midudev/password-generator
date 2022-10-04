export const initialValues = {
	includeNumbers: false,
	includeSymbols: false,
	length: 8
}

const NUMBERS = '0123456789'
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const SYMBOLS = '!@#$^&*()_+=/?.,<>'

export const getCharacters = (initialValues) => {
	const { includeNumbers, includeSymbols } = initialValues

	let characters = []

	if (!includeNumbers && !includeSymbols) characters = [...ALPHABET]

	if (!includeNumbers && includeSymbols) characters = [...ALPHABET, ...SYMBOLS]

	if (includeNumbers && !includeSymbols) characters = [...NUMBERS, ...ALPHABET]

	if (includeNumbers && includeSymbols) characters = [...NUMBERS, ...ALPHABET, ...ALPHABET]

	return characters
}

export const getRandomCharacters = (initialValues, characters) => {
	const { length } = initialValues

	if (length === 0) return ''

	const maxLength = characters.length
	let password = ''

	for (let i = 0; i < length; i++) {
		password += characters[Math.floor(Math.random() * maxLength)]
	}

	return password
}

export const generatePassword = (initialValues) => {
	const dictionary = getCharacters(initialValues)

	return getRandomCharacters(initialValues, dictionary)
}
