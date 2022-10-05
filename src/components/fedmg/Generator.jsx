import React, { useState } from 'react'
import './styles/generator.css'

function getPassword(range) {
	const characters = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ_'
	let code = ''

	for (let i = 0; i < range; i++) {
		code += characters[Math.floor(Math.random() * characters.length - i)]
	}
	return code
}

const res = {
	password: '',
	status: false,
	message: ''
}

const PasswordGenerator = () => {
	const [range, setRange] = useState(10)
	const [response, setResponse] = useState(res)

	const getRange = (e) => {
		setRange(e.target.value)
		setResponse({ ...res, password: response.password })
	}
	const generatePass = () => {
		setResponse({
			...response,
			// status: true,
			password: getPassword(range)
		})
	}

	const saveToClipboard = () => {
		if (response.status) {
			// navigator.clipboard.writeText(response.password)
			setResponse({
				...response,
				message: 'Copied to the clipboard successfully!'
			})
		}
		setResponse({
			...response,
			message: 'There is no password to save!'
		})
	}

	return (
		<main className='fedmg-main'>
			<div className='form'>
				<h2>Password Generator</h2>
				<span>{response.password}</span>
				<button onClick={saveToClipboard}>{response.status ? 'Copied' : 'Copy'}</button>
				<input type='range' className='input-range' min='4' max='100' onChange={getRange} />
				<label>{range}</label>
				<button onClick={generatePass}>Generate</button>
				<span>{response.message}</span>
			</div>
		</main>
	)
}

export default PasswordGenerator
