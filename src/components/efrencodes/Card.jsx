import React, { useEffect, useState } from 'react'
import passwordGenerator from './passwordGanerator'

const CONSTANTS = {
	MIN_LENGTH: 8,
	MAX_LENGTH: 128
}

const Card = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(8)
	const [options, setOptions] = useState({
		uppercase: false,
		lowercase: true,
		numbers: false,
		symbols: false
	})

	const handleRange = (e) => setPasswordLength(e.target.value)
	const handleCheckUppercase = (e) =>
		setOptions((options) => ({
			...options,
			uppercase: e.target.checked
		}))
	const handleCheckLowercase = (e) =>
		setOptions((options) => ({
			...options,
			lowercase: e.target.checked
		}))
	const handleCheckNumbers = (e) =>
		setOptions((options) => ({
			...options,
			numbers: e.target.checked
		}))
	const handleCheckSymbols = (e) =>
		setOptions((options) => ({
			...options,
			symbols: e.target.checked
		}))

	useEffect(() => {
		const randomPassword = passwordGenerator(passwordLength, options)
		setPassword(randomPassword)
	}, [passwordLength, options])

	return (
		<div className='text-white flex flex-col items-center justify-center h-screen'>
			<h1>Genera una contraseña más segura.</h1>
			<p>{password}</p>
			<input
				type='range'
				min={CONSTANTS.MIN_LENGTH}
				max={CONSTANTS.MAX_LENGTH}
				value={passwordLength}
				onChange={(e) => handleRange(e)}
			/>
			<p>Longitud de la contraseña {passwordLength}</p>
			<div className='flex flex-row'>
				<input
					type='checkbox'
					name='uppercase'
					className='mr-3'
					onChange={handleCheckUppercase}
					checked={options.uppercase}
				/>
				<label>Mayúsculas</label>
			</div>
			<div className='flex flex-row'>
				<input
					type='checkbox'
					name='lowercase'
					className='mr-3'
					onChange={handleCheckLowercase}
					checked={options.lowercase}
				/>
				<label>Minúsculas</label>
			</div>
			<div className='flex flex-row'>
				<input
					type='checkbox'
					name='numbers'
					className='mr-3'
					onChange={handleCheckNumbers}
					checked={options.numbers}
				/>
				<label>Números</label>
			</div>
			<div className='flex flex-row'>
				<input
					type='checkbox'
					name='symbols'
					className='mr-3'
					onChange={handleCheckSymbols}
					checked={options.symbols}
				/>
				<label>Símbolos</label>
			</div>
		</div>
	)
}

export default Card
