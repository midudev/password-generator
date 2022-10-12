import { useState } from 'react'
import './style/generatePassword.css'

export const GeneratePassword = () => {
	const [initValue, setInitValue] = useState(10)
	const [password, setPassword] = useState('need a password?')
	function handlerRange(event) {
		event.preventDefault()
		setInitValue(Number(event.target.value))

		if (Number(initValue) >= 12) {
			window.document.getElementById('castle').style.bottom = '50px'
		} else {
			window.document.getElementById('castle').style.bottom = '0px'
		}
		if (initValue <= 8) {
			window.document.getElementById('tower').style.bottom = '-300px'
			window.document.getElementById('tower2').style.bottom = '-300px'
		} else {
			window.document.getElementById('tower').style.bottom = '0px'
			window.document.getElementById('tower2').style.bottom = '0px'
		}
		if (initValue <= 6) {
			window.document.getElementById('wall').style.bottom = '-300px'
		} else {
			window.document.getElementById('wall').style.bottom = '0px'
		}

		console.log(initValue)
	}
	function handlerGeneratePassword() {
		setPassword('password generated')
	}

	return (
		<div id='form'>
			<p>{password}</p>
			<label htmlFor='eyubkh-input'>{initValue}</label>
			<input
				id='eyubkh-input'
				onChange={handlerRange}
				type='range'
				value={`${initValue}`}
				min='5'
				max='16'
			/>
			<button onClick={handlerGeneratePassword} id='eyubkh-button'>
				generate password
			</button>
		</div>
	)
}
