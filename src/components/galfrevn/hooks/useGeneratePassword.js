import { useState } from 'react'

const initialGenerationParams = {
	characters: 8,
	digits: 0,
	capitals: 0,
	symbols: 0
}

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const digits = '0123456789'
const symbols = '!@#$%&*_'

const useGeneratePassword = () => {
	const [generationParams, setGenerationParams] = useState(initialGenerationParams)
	const [password, setPassword] = useState(null)

	const maxCharactersReached =
		generationParams.capitals + generationParams.digits + generationParams.symbols >=
		generationParams.characters

	/**
	 * Update the password generation params state
	 * @param {(keyof initialGenerationParams)} key Key of initialGenerationParams
	 * @param {string} value New value to set in the state
	 */
	const changeGenerationParam = (key, value) => {
		// If we enter a value smaller than the current amount of characters
		// Set all the other params to zero.
		if (key === 'characters' && value < generationParams.characters)
			return setGenerationParams({ characters: value, digits: 0, capitals: 0, symbols: 0 })
		setGenerationParams({ ...generationParams, [key]: Number(value) })
	}

	// Shuffle a string
	const shuffle = (str) => [...str].sort(() => Math.random() - 0.5).join('')

	const generatePassword = () => {
		let generatedPassword = ''
		// Loop through the password generation params
		for (let i = 0; i < generationParams.digits; i++) {
			generatedPassword += digits[Math.floor(Math.random() * digits.length)]
		}
		for (let i = 0; i < generationParams.capitals; i++) {
			generatedPassword += capitalLetters[Math.floor(Math.random() * capitalLetters.length)]
		}
		for (let i = 0; i < generationParams.symbols; i++) {
			generatedPassword += symbols[Math.floor(Math.random() * symbols.length)]
		}
		// Fill the empty spaces with lowercase Letters
		const diference = generationParams.characters - generatedPassword.length
		for (let i = 0; i < diference; i++) {
			generatedPassword += lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
		}
		return setPassword(shuffle(generatedPassword))
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password)
		alert('Password copied successfully ✅')
	}

	return {
		password,
		generationParams,
		changeGenerationParam,
		generatePassword,
		maxCharactersReached,
		copyToClipboard
	}
}

export default useGeneratePassword
