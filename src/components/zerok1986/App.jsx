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
				<button id='copy'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
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

