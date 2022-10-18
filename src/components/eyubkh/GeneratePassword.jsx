import { useState } from 'react'
import animation from './library/animation'
import generatePassword from './library/generatePassword'

import './style/generatePassword.css'

export const GeneratePassword = () => {
	const [initValue, setInitValue] = useState(10)
	const [password, setPassword] = useState('need a password?')

	function handlerRange(event) {
		event.preventDefault()
		setInitValue(Number(event.target.value))
		animation(initValue)
	}

	function handlerGeneratePassword() {
		setPassword(generatePassword(initValue))
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
					value={initValue}
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
