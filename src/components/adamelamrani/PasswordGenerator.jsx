import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles/passwordGenerator.css'
import InputRange from './utils/InputRange'
import passwordFunction from './utils/passwordFunction'

const PasswordGenerator = () => {
	const [inputRange, setInputRange] = useState(6)
	console.log(inputRange)

	return (
		<main>
			<h1>Random password generator</h1>
			<span className='password-length'>Password length: {inputRange}</span>
			<InputRange setRange={setInputRange} inputRange={inputRange} />
			<ButtonComponent onClick={() => passwordFunction(inputRange)}>
				Generate Password
			</ButtonComponent>
		</main>
	)
}

export default PasswordGenerator
