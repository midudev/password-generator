import { useState, useEffect } from 'react'
import { DEFAULT_PASSWORD_OPTIONS } from '../constants/constants'
import {
	generatePassword,
	replacePasswordCharacterAt
} from '../utils/generate-password/generate-password'

export function usePasswordGenerator() {
	const [passwordLength, setPasswordLength] = useState(DEFAULT_PASSWORD_OPTIONS.length)
	const [password, setPassword] = useState('')

	const handleGeneratePassword = () => {
		setPassword(
			generatePassword({
				...DEFAULT_PASSWORD_OPTIONS,
				length: passwordLength
			})
		)
	}

	const handleCharacterReplacement = ({ index }: { index: number }) => {
		setPassword(replacePasswordCharacterAt({ password, index, options: DEFAULT_PASSWORD_OPTIONS }))
	}

	useEffect(() => {
		setPassword(
			generatePassword({
				...DEFAULT_PASSWORD_OPTIONS,
				length: passwordLength
			})
		)
	}, [passwordLength])

	return {
		passwordLength,
		setPasswordLength,
		password,
		generatePassword: handleGeneratePassword,
		replaceCharacterAt: handleCharacterReplacement
	}
}
