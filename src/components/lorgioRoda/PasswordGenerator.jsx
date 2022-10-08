import React, { useState } from 'react'
import { useCopieText } from './hook/useCopieText'

const passwordGenerator = (props) => {
	const chars = '1234567890asdfghjklqwertyuiop@!$&*.zxcvbnm'
	const newPassword = []
	const [password, setPassword] = useState('')

	const generator = () => {
		for (let i = 0; i < props.value; i++) {
			const number = Math.floor(Math.random() * chars.length)
			newPassword.push(chars[number])
		}
		return setPassword(newPassword.join(''))
	}

	return (
		<>
			<h1>Password Generator</h1>
			<input type='text' value={password} />
			<button onClick={() => generator()}>Click</button>
			<button onClick={() => useCopieText(password)}>Copy To Clipboard</button>
		</>
	)
}

export default passwordGenerator
