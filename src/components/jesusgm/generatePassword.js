import { LETTERS, NUMBERS, CHARS } from './constants'

export const generatePw = ({
	length = 10,
	letters = LETTERS,
	numbers = NUMBERS,
	specialChars = CHARS
}) => {
	const allChars = `${letters}${numbers}${specialChars}`.split('')

	const newId = []

	for (let i = 0; i < length; i++) {
		const rndInt = Math.floor(Math.random() * allChars.length)
		newId.push(allChars[rndInt])
	}

	return newId.join('')
}
