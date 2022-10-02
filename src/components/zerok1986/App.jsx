import React, { useState } from 'react'
import './App.css'

export default function App() {
	const [passLength, setPassLength] = useState(8)

	const generatePassword = (length) => {
		const charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\”#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
		let password = ""
		for (let i = 0; i < length; i++) {
			password += charList.charAt(Math.floor(Math.random() * charList.length))
		}
		return password
	}	

	return (
	<div className='box'>
		<div className='text-white'>
			<div id='password-generator'>
				<input type='text' id='password' />
				<button id='copy'>Copy</button>
				<div id='settings'>
					<label htmlFor='length'>Length</label>
					<input 
						type='range' 
						id='length' 
						value={passLength} 
						onChange={(e) => {
							setPassLength(e.target.value)
						}}
						min='6' 
						max='24'
						step='1' 
						/>
					<span id='value'>{passLength}</span>
				</div>
				<button id='generate'>Generate Password</button>
			</div>
		</div>
	</div>
  )
}

