import { useState } from 'react'
const usePassword = () => {
	const [password, setPassword] = useState('')
	const [notificaction, setNotification] = useState(false)
	const [passwordLength, setPasswordLength] = useState(8)
	const [config, setConfig] = useState({
		withNumbers: true,
		passwordRange: { min: 6, max: 20 },
		notificactionDelay: 1000
	})

	const generateRandomPassword = () => {
		let chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		if (config.withNumbers) {
			chars += '0123456789'
		}
		let passwordRaw = ''
		for (let i = 0; i <= passwordLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			passwordRaw += chars.substring(randomNumber, randomNumber + 1)
		}
		setPassword(passwordRaw)
	}
	const setWithNumbers = (value) => {
		setConfig({ ...config, withNumbers: value })
	}

	return {
		setWithNumbers,
		setNotification,
		setPasswordLength,
		generateRandomPassword,
		passwordLength,
		notificaction,
		password,
		config
	}
}
export default usePassword
