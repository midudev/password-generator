import React, { useState } from 'react'
import './styles/generator.css'

function getPassword(range) {
	const characters = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ_'
	let code = ''

	for (let i = 0; i < range; i++) {
		code += characters[Math.floor(Math.random() * characters.length)]
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
			<section className='section'>
				<h2 className='title'>Password generator</h2>
				<div className='form'>
					{/* <span>Password length</span> */}
					<div className='input-container'>
						<div className='label-container'>
							<label className='range-lbl' for='range'>
								Password length:
							</label>
							<span className='range-span'>{range}</span>
						</div>
						<input
							type='range'
							id='range'
							className='range-input'
							min='4'
							max='18'
							onChange={getRange}
						/>
					</div>

					<div className='password-container'>
						<div className='container-pass'>
							<span className='password-response'>{response.password}</span>
						</div>
						<button className='clipboard-button' onClick={saveToClipboard}>
							{response.status ? 'Copied' : 'Copy'}
						</button>
					</div>
					<div className='button-container'>
						<div className='message-container'>
							<span className='response-message'>{response.message}</span>
						</div>
						<button className='generate-button' onClick={generatePass}>
							Generate
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}

export default PasswordGenerator
