import { useMemo, useState } from 'react'
import type React from 'react'
import type { Options, OptionsMapper, SettingsState } from '@components/javierscode/types'

const NUMBERS = '0123456789'
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const SYMBOLS = '!@#$%^&*()'

const characterOptionsMapper: OptionsMapper = {
	includeLetters: LETTERS,
	includeNumbers: NUMBERS,
	includeSymbols: SYMBOLS,
	includeUppercase: LETTERS.toUpperCase()
}

type PasswordGeneratorState = {
    password: string;
    length: number;
    settings: SettingsState
}

const initialState: PasswordGeneratorState = {
	password: '',
	length: 16,
	settings: {
		includeLetters: true,
		includeNumbers: true,
		includeSymbols: false,
		includeUppercase: false
	}
}

export default function usePasswordGenerator() {
	const [{ password, settings, length }, setState] = useState<PasswordGeneratorState>(initialState)

	const setPassword = (newPassword: string) => setState((prevState) => ({ ...prevState, password: newPassword }))
	const setLength = (newLength: number) => setState((prevState) => ({ ...prevState, length: newLength }))
	const setSettings = (newSettings: SettingsState) => setState((prevState) => ({ ...prevState, settings: newSettings }))

	const validCharacters = useMemo(() => {
		const options = Object.keys(settings) as Options[]
		return options.reduce((acc, option) => settings[option] ? acc + characterOptionsMapper[option] : acc, '')
	}, [settings])

	const generatePassword = () => {
		let newPassword = ''
		for (let i = 0; i < length && validCharacters.length > 0; i++) {
			const randomIndex = Math.floor(Math.random() * validCharacters.length)
			const character = validCharacters[randomIndex]
			newPassword = newPassword + character
		}
		setPassword(newPassword)
	}

	const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		const currentLength = Number(value)
		console.log(e.target.style.backgroundSize)

		e.target.style.backgroundSize = (currentLength - 4) * 100 / (32 - 4) + '% 100%'
		setLength(currentLength)
	}

	const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = e.target
		const option = name as Options
		setSettings({ ...settings, [option]: !settings[option] })
	}


	return { password, generatePassword, length, handleLengthChange, settings, handleSettingsChange }
}