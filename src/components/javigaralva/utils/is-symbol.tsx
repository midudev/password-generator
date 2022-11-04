import { SYMBOLS } from '../constants'

export function isSymbol(letter: string) {
	return SYMBOLS.includes(letter)
}
