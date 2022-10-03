const MAX_LENGTH = 128
const MIN_LENGTH = 8
const NUMBERS = '0123456789' as const
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz' as const
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const
const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,./<>?' as const

// eslint-disable-next-line space-before-function-paren
export function generatePassword(length: number) {
	if (!isValidLength(length)) {
		throw new Error('Invalid length')
	}

	let password = ''
	for (let i = 0; i < length; i++) {
		const random = getRandomIndexInRange(4)
		/* eslint-disable indent */
		switch (random) {
			case 0:
				password += NUMBERS[getRandomIndexInRange(NUMBERS.length)]
				break
			case 1:
				password += LOWERCASE[getRandomIndexInRange(LOWERCASE.length)]
				break
			case 2:
				password += UPPERCASE[getRandomIndexInRange(UPPERCASE.length)]
				break
			case 3:
				password += SYMBOLS[getRandomIndexInRange(SYMBOLS.length)]
				break
		}
		/* eslint-enable indent */
	}

	return password
}

const getRandomIndexInRange = (max: number) => Math.floor(Math.random() * max)
const isValidLength = (length: number) =>
	!Number.isNaN(length) &&
	Number.isSafeInteger(length) &&
	length >= MIN_LENGTH &&
	length <= MAX_LENGTH
