import { useState } from 'react'

export const GeneratePasswordComponent = () => {
	const [initValue, setInitValue] = useState('6')
	const [password, setPassword] = useState('need a password?')
	function handlerRange(event) {
		event.preventDefault()
		console.log(event.target.value)
		setInitValue(event.target.value)
	}
	function handlerGeneratePassword() {
		setPassword('password generated')
	}

	return (
		<>
			<p>{password}</p>
			<label htmlFor='eyubkh-input'>{initValue}</label>
			<input
				id='eyubkh-input'
				onChange={handlerRange}
				type='range'
				value={initValue}
				min='6'
				max='15'
			/>
			<button onClick={handlerGeneratePassword} id='eyubkh-button'>
				generate password
			</button>
		</>
	)
}
