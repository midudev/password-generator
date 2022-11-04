import { NUMBERS } from '../constants'

export function isNumber(letter: string) {
	return NUMBERS.includes(letter)
}
