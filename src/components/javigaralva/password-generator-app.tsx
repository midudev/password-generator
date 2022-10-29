import { useState } from 'react'

interface GeneratePasswordOptions {
	length: number
	hasUpperCaseLetters: boolean
	hasLowerCaseLetters: boolean
	hasNumbers: boolean
	hasSymbols: boolean
}
const DEFAULT_PASSWORD_OPTIONS: GeneratePasswordOptions = {
	length: 24,
	hasUpperCaseLetters: true,
	hasLowerCaseLetters: true,
	hasNumbers: true,
	hasSymbols: true
}

function generatePassword(options: GeneratePasswordOptions) {
	return Array.from<undefined>({ length: options.length }).reduce(
		(acc: string) => acc + getRandomCharacter(options),
		''
	)
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

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '\'\\¡!"·$%&()=€@[]{}^/+-*'
const UPPER_CASE_LETTERS_LIST = LETTERS.toUpperCase().split('')
const LOWER_CASE_LETTERS_LIST = LETTERS.toLowerCase().split('')
const NUMBERS_LIST = NUMBERS.split('')
const SYMBOLS_LIST = SYMBOLS.split('')

const sampleUpperCaseLetter = makeSampleCharacterFunction(UPPER_CASE_LETTERS_LIST)
const sampleLowerCaseLetter = makeSampleCharacterFunction(LOWER_CASE_LETTERS_LIST)
const sampleNumber = makeSampleCharacterFunction(NUMBERS_LIST)
const sampleSymbol = makeSampleCharacterFunction(SYMBOLS_LIST)

function makeSampleCharacterFunction(characters: string[]) {
	return () => sample(characters)
}

function sample<T>(arr: T[]) {
	return arr[Math.floor(Math.random() * arr.length)]
}

function colorizePassword(password: string) {
	return password.split('').map((letter, i) => {
		let className = 'text-white'
		if (NUMBERS.includes(letter)) {
			className = 'text-orange-600'
		} else if (SYMBOLS.includes(letter)) {
			className = 'text-lime-600'
		} else if (UPPER_CASE_LETTERS_LIST.includes(letter)) {
			className = 'text-white/50'
		}
		return (
			<span key={letter + i} className={className}>
				{letter}
			</span>
		)
	})
}

export default function Main() {
	const [password, setPassword] = useState(generatePassword(DEFAULT_PASSWORD_OPTIONS))

	const handleGeneratePassword = () => {
		setPassword(generatePassword(DEFAULT_PASSWORD_OPTIONS))
	}

	return (
		<div className='w-screen h-screen bg-stone-800'>
			<div className='flex items-center place-content-center h-screen'>
				<div className='flex flex-col min-w-100 w-6/12 place-items-center gap-10'>
					<div className='text-slate-300 font-mono font-black text-4xl min-h-min tracking-widest break-all text-center'>
						{colorizePassword(password)}
					</div>
					<button
						className='bg-yellow-600 min-w-fit w-96 text-lg font-black uppercase py-2 rounded-md'
						onClick={handleGeneratePassword}
					>
						Generate Password
					</button>
				</div>
			</div>
		</div>
	)
}
