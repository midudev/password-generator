import { useState } from 'react'

const options = {
	symbols: [
		{ start: 33, end: 47 },
		{ start: 58, end: 64 },
		{ start: 91, end: 96 },
		{ start: 123, end: 126 }
	],
	numbers: [{ start: 48, end: 57 }],
	mayus: [{ start: 65, end: 90 }],
	minus: [{ start: 97, end: 122 }]
}

const useGeneratePassword = ({ optionsAllowed = ['mayus', 'minus', 'symbols', 'number'] }) => {
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)

	const mainProcess = (length) => {
		let text = ''

		const mapped = optionsAllowed.reduce((acc, allowed) => {
			if (allowed && options[allowed]) {
				acc.push([[allowed], options[allowed]])
			}

			return acc
		}, [])

		while (text.length < length) {
			const randomOption = Math.floor(Math.random() * mapped.length + 1)
			const option = mapped[randomOption - 1]

			const item = option[1][Math.floor(Math.random() * option[1].length)]

			const character = Math.floor(Math.random() * (item.end - item.start + 1) + item.start)

			const charCodeString = String.fromCharCode(character)

			// TODO: option to user, same character
			if (text.length == 0 || charCodeString !== text[text.length - 1]) {
				text += String.fromCharCode(character)
			}
		}

		setPassword(text)
	}

	const generateNewPassword = (length) => {
		setLoading(true)
		mainProcess(length)
		setLoading(false)
	}

	return { password, loading, generateNewPassword }
}

export default useGeneratePassword
