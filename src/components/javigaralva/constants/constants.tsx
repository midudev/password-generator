import { GeneratePasswordOptions } from '../utils/generate-password/generate-password'

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
export const NUMBERS = '0123456789'
export const SYMBOLS = '\'\\¡!"·$%&()=€@[]{}^/+-*'
export const UPPER_CASE_LETTERS_LIST = LETTERS.toUpperCase().split('')
export const LOWER_CASE_LETTERS_LIST = LETTERS.toLowerCase().split('')
export const NUMBERS_LIST = NUMBERS.split('')
export const SYMBOLS_LIST = SYMBOLS.split('')
export const MIN_PASSWORD_LENGTH = 1
export const MAX_PASSWORD_LENGTH = 30

export const DEFAULT_PASSWORD_OPTIONS: GeneratePasswordOptions = {
	length: 10,
	hasUpperCaseLetters: true,
	hasLowerCaseLetters: true,
	hasNumbers: true,
	hasSymbols: true
}
