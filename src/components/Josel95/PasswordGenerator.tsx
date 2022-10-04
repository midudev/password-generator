import { ChangeEvent, useState } from 'react'

import { generatePassword } from './utils/generatePassword'
import { Password } from './Password'

export const PasswordGenerator = () => {
	const [passwordGenerated, setPasswordGenerated] = useState('')
	const [passwordLength, setPasswordLength] = useState(10)
	const [loading, setLoading] = useState(false)

	const handlePasswordGenerate = () => {
		setLoading(true)
		const interval = setInterval(() => {
			const password = generatePassword(passwordLength)
			setPasswordGenerated(password)
		}, 50)

		setTimeout(() => {
			setLoading(false)
			clearInterval(interval)
		}, 1000)
	}

	const handleLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
		const rangeValue = parseInt(event.target.value)
		setPasswordLength(rangeValue)
	}

	return (
		<div className='josel95-password-generator-container'>
			<h1 className='josel95-password-generator-title'>Password generator</h1>
			<Password value={passwordGenerated} blurred={loading}/>
			<input className='josel95-password-generator-length' type='range' min={5} max={64} defaultValue={10} onChange={handleLengthChange}/>
			<button className='josel95-password-generator-button' onClick={handlePasswordGenerate}>Generate</button>
		</div>
	)
}