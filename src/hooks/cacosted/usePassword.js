import {useState, useEffect} from 'react'

const CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='

export const usePassword = (initialLength = 5) => {
	const [passLength, setPassLength] = useState(initialLength)
	const [password, setPassword] = useState('')

	const getRandomChar = () => {
		const charArray = CHARSET.split('')
		const randomIndex = Math.floor(Math.random() * CHARSET.length)
		const randomChar = charArray[randomIndex]
		return randomChar
	}

	const generatePassword = () => {
		const password = Array.from({length: passLength}).map(() => getRandomChar())
		return password.join('')
	}

	const setNewLength = (number) => setPassLength(number)
	
	const setNewPassword = () => {
		const newPassword = generatePassword()
		setPassword(newPassword)
	}
	

	useEffect(() => {
		setNewPassword()
	},[passLength])

	return {
		password,
		setNewLength,
		setNewPassword
	}
}
