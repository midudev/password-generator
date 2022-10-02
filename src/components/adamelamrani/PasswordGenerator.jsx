import React, { useEffect, useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles/passwordGenerator.css'
import InputRange from './utils/InputRange'

const PasswordGenerator = () => {
	const [inputRange, setInputRange] = useState(6)

	return (
		<main>
			<h1>Random password generator</h1>
			<span className='password-length'>Password length: {inputRange}</span>
			<InputRange setRange={setInputRange} inputRange={inputRange} />
			<ButtonComponent onClick={() => console.log('Hola')}>Generate Password</ButtonComponent>
		</main>
	)
}

export default PasswordGenerator
