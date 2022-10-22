import { writable } from 'svelte/store'

const NUMBERS = '0123456789'
const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SYMBOLS = '!@#$%^&*()_+-=[]{};:,./<>?'

const DEFAULT_OPTIONS = {
	length: 18,
	numbers: true,
	lowercase: true,
	uppercase: true,
	symbols: true
}

export function usePassword(options: Partial<typeof DEFAULT_OPTIONS>) {
	const { subscribe, set } = writable('')

	options = { ...DEFAULT_OPTIONS, ...options }

	const strength = () =>
		Math.min(
			(options.numbers ? 1 : 0) +
				(options.lowercase ? 1 : 0) +
				(options.uppercase ? 1 : 0) +
				(options.symbols ? 1 : 0) +
				(options.length < 16 ? -2 : 0) +
				(options.length < 8 ? -2 : 0),
			4
		)

	const chars = []
	if (options.numbers) chars.push(NUMBERS)
	if (options.lowercase) chars.push(LOWERCASE_LETTERS)
	if (options.uppercase) chars.push(UPPERCASE_LETTERS)
	if (options.symbols) chars.push(SYMBOLS)

	const charSet = chars.join('')

	const generate = () => {
		let password = ''
		for (let i = 0; i < options.length; i++) {
			password += charSet[Math.floor(Math.random() * charSet.length)]
		}
		set(password)
	}

	return {
		subscribe,
		generate,
		strength
	}
}

usePassword.defaultProps = {}
