import { useEffect, useState } from 'react'
import { Button } from './Button'
import { Password } from './Password'
import { Range } from './Range'
import { Switch } from './Switch'

const INITIAL_PASSWORD_LENGTH = 12

const letters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseLetters = letters.toUpperCase()
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='

const INITIAL_INPUTS_VALUES_STATE = {
	passwordLength: INITIAL_PASSWORD_LENGTH,
	includeUppercase: false,
	includeNumbers: false,
	includeSymbols: false
}

export function PasswordGenerator() {
	const [password, setPassword] = useState('')
	const [formInputs, setFormInputs] = useState(INITIAL_INPUTS_VALUES_STATE)

	useEffect(() => {
		handlePasswordGeneration()
	}, [])

	const handleInputChange = (event) => {
		setFormInputs({
			...formInputs,
			[event.target.name]: event.target.value
		})
	}

	const handleSwitchChange = (event) => {
		setFormInputs({
			...formInputs,
			[event.target.name]: event.target.checked
		})
	}

	const handlePasswordGeneration = () => {
		const { passwordLength, includeUppercase, includeNumbers, includeSymbols } = formInputs

		let string = letters
		let password = ''

		if (includeUppercase) {
			string += uppercaseLetters
		}

		if (includeNumbers) {
			string += numbers
		}

		if (includeSymbols) {
			string += symbols
		}

		for (let i = 0; i < passwordLength; i++) {
			password += string[Math.floor(Math.random() * string.length)]
		}

		setPassword(password)
	}

	const handleClick = (event) => {
		event.preventDefault()
		handlePasswordGeneration()
	}

	return (
		<div className='flex flex-col gap-6'>
			<h1 className='text-3xl text-white font-bold'>Generador de contraseñas</h1>
			<Password password={password} />
			<form onSubmit={handlePasswordGeneration}>
				<div className='flex flex-col gap-3'>
					<Range value={formInputs.passwordLength} onChange={handleInputChange} />
				</div>
				<div className='flex flex-col gap-3'>
					<Switch
						value={formInputs.includeUppercase}
						name='includeUppercase'
						id='uppercase'
						label='Incluir mayúsculas'
						onChange={handleSwitchChange}
					/>
					<Switch
						value={formInputs.includeNumbers}
						name='includeNumbers'
						id='number'
						label='Incluir números'
						onChange={handleSwitchChange}
					/>
					<Switch
						value={formInputs.includeSymbols}
						name='includeSymbols'
						id='symbol'
						label='Incluir símbolos'
						onChange={handleSwitchChange}
					/>
				</div>
				<Button type='submit' onClick={handleClick} />
			</form>
		</div>
	)
}
