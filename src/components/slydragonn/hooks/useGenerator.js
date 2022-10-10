import { useState } from 'react'

const useGenerator = (
	initialConfig = {
		maxLength: 6
	}
) => {
	const [config, setConfig] = useState(initialConfig)
	const [password, setPassword] = useState('')
	const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*+-ñÑ/&%$#!¡¿?'

	const Config = {
		setLength: (number) => {
			setConfig((config) => ({ ...config, maxLength: number }))
		},
		length: config.maxLength
	}

	const generatePassword = () => {
		let generatedPassword = ''

		for (let i = 0; i < config.maxLength; i++) {
			generatedPassword += chars[Math.floor(Math.random() * chars.length)]
		}
		setPassword(() => generatedPassword)
	}

	return [password, generatePassword, Config]
}

export default useGenerator
