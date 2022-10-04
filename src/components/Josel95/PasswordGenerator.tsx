import { ChangeEvent, useState } from 'react'

import { generatePassword } from './utils/generatePassword'

export const PasswordGenerator = () => {
	const [passwordGenerated, setPasswordGenerated] = useState('')
	const [passwordLength, setPasswordLength] = useState(10)

	const handlePasswordGenerate = () => {
		const password = generatePassword(passwordLength)
		setPasswordGenerated(password)
	}

	const handleLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
		const rangeValue = parseInt(event.target.value)
		setPasswordLength(rangeValue)
	}

	return (
		<div className='josel95-password-generator-container'>
			<h1>Password generator</h1>
			<span>{passwordGenerated}</span>
			<input type='range' min={5} max={64} defaultValue={10} onChange={handleLengthChange}/>
			<button onClick={handlePasswordGenerate}>Generate</button>
		</div>
	)
}