import { useState, useEffect } from 'react'

import { Password } from '../../model/index.js'

export default function usePassword({ length, memorable, prefix } = {}) {
	const [password, setPassword] = useState('')
	const [strength, setStrength] = useState({})
	const [{ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber }, setFlags] = useState({
		hasLowerCase: true,
		hasCapitalLetter: false,
		hasSymbol: false,
		hasNumber: false
	})

	const update = (value) => {
		setPassword(value)
		setStrength(Password.passwordStrength(value))
	}

	const generate = (settings = {}) => {
		const newResult = new Password({
			length,
			memorable,
			prefix,
			hasLowerCase,
			hasCapitalLetter,
			hasSymbol,
			hasNumber,
			...settings
		})
		setPassword(newResult[0])
		setStrength(newResult[1])
	}
	const copyToClipboard = async (text = password) => {
		await navigator.clipboard.writeText(text)
	}

	useEffect(() => {
		generate({
			length,
			memorable,
			prefix,
			hasLowerCase,
			hasCapitalLetter,
			hasSymbol,
			hasNumber
		})
	}, [length, memorable, prefix, hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber])

	return Object.assign(
		[
			password,
			update,
			strength,
			generate,
			copyToClipboard,
			{ hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber },
			setFlags
		],
		{
			password,
			update,
			strength,
			generate,
			copyToClipboard,
			flags: { hasLowerCase, hasCapitalLetter, hasSymbol, hasNumber },
			setFlags
		}
	)
}
