import { useState } from 'react'
import './style/generatePassword.css'

export const GeneratePassword = () => {
	const [initValue, setInitValue] = useState(10)
	const [password, setPassword] = useState('need a password?')
	function handlerRange(event) {
		event.preventDefault()
		setInitValue(Number(event.target.value))

		if (initValue >= 14) {
			window.document.getElementById('eyubkh-fullWall').style.marginBottom = '0px'
		} else {
			window.document.getElementById('eyubkh-fullWall').style.marginBottom = '-300px'
		}

		if (Number(initValue) >= 12) {
			window.document.getElementById('eyubkh-castle').style.marginBottom = '30px'
		} else {
			window.document.getElementById('eyubkh-castle').style.marginBottom = '0px'
		}

		if (initValue <= 8) {
			const towers = window.document.querySelectorAll('#eyubkh-tower')
			towers.forEach((tower) => (tower.style.marginBottom = '-300px'))
		} else {
			const towers = window.document.querySelectorAll('#eyubkh-tower')
			towers.forEach((tower) => (tower.style.marginBottom = '0px'))
		}

		if (initValue <= 6) {
			window.document.getElementById('eyubkh-wall').style.marginBottom = '-300px'
		} else {
			window.document.getElementById('eyubkh-wall').style.marginBottom = '0px'
		}
	}

	function handlerGeneratePassword() {
		setPassword('password generated')
	}

	return (
		<div id='eyubkh-generate-card'>
			<p id='eyubkh-password'>{password}</p>
			<div>
				<label htmlFor='eyubkh-input'>{initValue}</label>
				<input
					id='eyubkh-input'
					onChange={handlerRange}
					type='range'
					value={`${initValue}`}
					min='5'
					max='16'
				/>
			</div>
			<button onClick={handlerGeneratePassword} id='eyubkh-button'>
				Generate
			</button>
		</div>
	)
}
