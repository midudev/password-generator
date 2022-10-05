export const generatePassword = (length: number) => {
	let generatedPassword = ''

	for (let i = 0; i < length; i++) {
		generatedPassword += getRandomChar()
	}

	return generatedPassword
}

const getRandomChar = () => {
	const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const NUMBERS = '0123456789'
	const SYMBOLS = '|@·~¬!"#$%&/()=¿°?¡¨*[]{},.-;:_'

	const POSSIBLE_CHARS = LETTERS.concat(NUMBERS.concat(SYMBOLS))

	const MAX_CHAR = LETTERS.length + NUMBERS.length + SYMBOLS.length

	const randomIndex = Math.floor(Math.random() * MAX_CHAR)

	return POSSIBLE_CHARS[randomIndex]
}