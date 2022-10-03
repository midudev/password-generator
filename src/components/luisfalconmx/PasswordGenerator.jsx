import { useState, useEffect } from 'react'
import Clipboard from './Clipboard'
import Controls from './Controls'

export default function PasswordGenerator() {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(12)
	const [showNotification, setShowNotification] = useState(false)
	const [options, setOptions] = useState({
		uppercase: true,
		lowercase: true,
		numbers: false,
		symbols: false
	})

	const updateOptions = (state) => {
		setOptions({
			...options,
			...state
		})
	}

	const generate = () => {
		const lettersLowercase = 'abcdefghijklmnopqrstuvwxyz'
		const lettersUppercase = lettersLowercase.toUpperCase()
		const numbers = '0123456789'
		const symbols = '~!@#$%^&*()_-'

		let characters = ''
		let phrase = ''

		if (options.uppercase) characters += lettersUppercase
		if (options.lowercase) characters += lettersLowercase
		if (options.numbers) characters += numbers
		if (options.symbols) characters += symbols

		// Generate a password
		for (let i = 0; i <= passwordLength; i++) {
			const randomNumber = Math.floor(Math.random() * characters.length)
			phrase += characters.substring(randomNumber, randomNumber + 1)
		}

		// Set password
		setPassword(phrase)
	}

	useEffect(() => {
		generate()
	}, [passwordLength, options])

	return (
		<>
			<div
				className={`fixed left-0 right-0 m-auto w-2/5 bg-giga/50 text-white text-center px-4 py-2 rounded-lg font-special font-bold transition-all ease-in-out ${
					showNotification ? 'top-4' : '-top-96'
				}`}
			>
				Copied to clipboard
			</div>
			<Clipboard
				password={password}
				handleGenerate={generate}
				setShowNotification={setShowNotification}
			/>
			<Controls
				passwordLength={passwordLength}
				updatePasswordLength={setPasswordLength}
				options={options}
				updateOptions={updateOptions}
			/>
		</>
	)
}
