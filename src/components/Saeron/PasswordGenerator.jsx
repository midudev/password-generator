import React, { useState } from 'react'
import Password from './Password'
import './style.css'
import Toast from './Toast'

const letters = 'abcdefghijklmnñopqrstuvwxyz'
const numbers = '0123456789'
const maxLength = 20
const defaultLength = 8
const defaultPassword = 'Generate your password'

export default function PasswordGenerator () {
	const [password, setPassword] = useState(defaultPassword)
	const [length, setLength] = useState(defaultLength)

	const generatePassword = () => {
		const characters = letters + numbers
		let generatedPassword = ''
		for (let i = 0; i < length; i++) {
			const randomLetter = Math.floor(Math.random() * characters.length)
			generatedPassword += characters[randomLetter]
		}
		setPassword(generatedPassword)
	}

	const handleLength = (event) => {
		setLength(event.target.value)
	}

	return (
		<main className='passwordGenerator'>
			<Toast/>
			<Password password={password}/>
			<div className='card'>
				<div className='lengthLabel'>
					<label>Character lenght</label>
					<h1>{length}</h1>
				</div>
				<input
					onChange={(event) => handleLength(event)}
					type='range'
					min={1}
					max={maxLength}
					value={length}
					className='lenghtSlider'
				/>
				<button onClick={generatePassword} className='generateBtn'>
					Generate
				</button>
			</div>
		</main>
	)
}
