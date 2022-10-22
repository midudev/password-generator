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

const password = writable('')

export function usePassword(options: Partial<typeof DEFAULT_OPTIONS> = {}) {
	const { subscribe, set } = password

	options = { ...DEFAULT_OPTIONS, ...options }

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
		generate
	}
}
