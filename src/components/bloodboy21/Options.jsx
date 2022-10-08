import { useState, useEffect } from 'react'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*_-+='

const generatePassword = (length, chars) => {
	let password = ''
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return password
}

const createPassword = ({ length, symbols, numbers }) => {
	let chars = ''
	chars += ALPHABET
	chars += ALPHABET.toUpperCase()
	symbols && (chars += SYMBOLS)
	numbers && (chars += NUMBERS)
	return generatePassword(length, chars)
}

export default function Options () {
	const [options, setOptions] = useState({
		length: 8,
		numbers: true,
		symbols: true
	})
	const [password, setPassword] = useState('')
	const [alert, setAlert] = useState({ show: false, msg: '', title: '', type: '' })
	useEffect(() => {
		setPassword(createPassword(options))
	}, [options])

	return {
		options,
		setOptions,
		createPassword: () => createPassword(options),
		password,
		setPassword,
		alert,
		setAlert
	}
}
