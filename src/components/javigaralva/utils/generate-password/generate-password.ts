import { sample } from '../sample'
import {
	UPPER_CASE_LETTERS_LIST,
	LOWER_CASE_LETTERS_LIST,
	NUMBERS_LIST,
	SYMBOLS_LIST
} from '../../constants/constants'

export interface GeneratePasswordOptions {
	length: number
	hasUpperCaseLetters: boolean
	hasLowerCaseLetters: boolean
	hasNumbers: boolean
	hasSymbols: boolean
}
export function generatePassword(options: GeneratePasswordOptions) {
	return Array.from<undefined>({ length: options.length }).reduce(
		(acc: string) => acc + getRandomCharacter(options),
		''
	)
}
interface ReplacePasswordCharacterAtParams {
	password: string
	index: number
	options: GeneratePasswordOptions
}
export function replacePasswordCharacterAt({
	password,
	index,
	options
}: ReplacePasswordCharacterAtParams): string {
	const areParamsValid = index >= 0 && index <= password.length - 1
	if (!areParamsValid) {
		return password
	}

	const character = getRandomCharacter(options)
	return password.substring(0, index) + character + password.substring(index + character.length)
}
function getRandomCharacter(options: GeneratePasswordOptions) {
	return getRandomCharacterPickerFunction(options)?.() ?? ''
}
function getRandomCharacterPickerFunction(options: GeneratePasswordOptions) {
	const choosableStrategy = getChoosableStrategies(options)
	return sample(choosableStrategy)
}
function getChoosableStrategies(options: GeneratePasswordOptions) {
	return [
		options.hasUpperCaseLetters ? sampleUpperCaseLetter : undefined,
		options.hasLowerCaseLetters ? sampleLowerCaseLetter : undefined,
		options.hasNumbers ? sampleNumber : undefined,
		options.hasSymbols ? sampleSymbol : undefined
	].filter(Boolean)
}
const sampleUpperCaseLetter = makeSampleCharacterFunction(UPPER_CASE_LETTERS_LIST)
const sampleLowerCaseLetter = makeSampleCharacterFunction(LOWER_CASE_LETTERS_LIST)
const sampleNumber = makeSampleCharacterFunction(NUMBERS_LIST)
const sampleSymbol = makeSampleCharacterFunction(SYMBOLS_LIST)

function makeSampleCharacterFunction(characters: string[]) {
	return () => sample(characters)
}
