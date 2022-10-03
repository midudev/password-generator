import { useState } from 'react'

import { generatePassword } from './utils/generatePassword'

export const PasswordGenerator = () => {
	const [passwordGenerated, setPasswordGenerated] = useState('')

	const handlePasswordGenerate = () => {
		const password = generatePassword(10)
		setPasswordGenerated(password)
	}

	return (
		<div className='josel95-password-generator-container'>
			<h1>Password generator</h1>
			<span>{passwordGenerated}</span>
			<button onClick={handlePasswordGenerate}>Generate</button>
		</div>
	)
}