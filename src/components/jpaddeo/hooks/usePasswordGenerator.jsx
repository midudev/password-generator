import { useState, useEffect, useCallback, createContext, useContext } from 'react'

const PasswordGeneratorContext = createContext()

export const CHAR_OPTIONS = {
	LETTERS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	NUMBERS: '0123456789',
	SYMBOLS: '!@#$%^&*()'
}

export const PasswordGeneratorContextProvider = ({ children }) => {
	const [passwordLength, setPasswordLength] = useState(40)
	const [options, setOptions] = useState(['LETTERS'])
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [copied, setCopied] = useState(false)

	const generatePassword = useCallback(() => {
		let password = ''
		const charsSelected = options.map((option) => CHAR_OPTIONS[option]).join()
		for (let i = 0; i <= passwordLength; i++) {
			let rnd = Math.floor(Math.random() * charsSelected.length)
			password += charsSelected.substring(rnd, rnd + 1)
		}
		setGeneratedPassword(password)
	}, [passwordLength, options])

	const updatePasswordLength = (passLength) => {
		if (passLength.length === 0) return
		setPasswordLength(passLength)
	}

	const updateOptions = (val) => {
		if (val && !options.includes(val)) {
			setOptions((prevOptions) => [...prevOptions, val])
		} else {
			setOptions((prevOptions) => prevOptions.filter((opt) => opt !== val))
		}
	}

	useEffect(() => {
		generatePassword()
	}, [passwordLength, options])

	return (
		<PasswordGeneratorContext.Provider
			value={{
				passwordLength,
				updatePasswordLength,
				options,
				updateOptions,
				generatePassword,
				generatedPassword
			}}
		>
			{children}
		</PasswordGeneratorContext.Provider>
	)
}

export const usePasswordGenerator = () => {
	return useContext(PasswordGeneratorContext)
}
