import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles/passwordGenerator.css'
import InputRange from './InputRange'
import passwordFunction from './utils/passwordFunction'

const PasswordGenerator = () => {
	const [inputRange, setInputRange] = useState(6)
	const [display, setDisplay] = useState(false)
	const [copied, setCopied] = useState(false)
	const passwordValue = passwordFunction(inputRange)
	const handleCopyPass = () => {
		navigator.clipboard.writeText()
		setCopied(true)
		if (copied) {
			alert('Copiado al portapapeles')
		}
	}

	return (
		<main id='adamelamrani'>
			<h1>Random password generator</h1>
			<span onClick={handleCopyPass} className='password-length'>
				Password length: {inputRange}
			</span>
			<InputRange setRange={setInputRange} inputRange={inputRange} />
			{display && (
				<>
					<span id='display-password'>{passwordValue}</span>
					<svg src='./utils/copy.svg' width={20} height={20} />
				</>
			)}
			<ButtonComponent onClick={() => setDisplay(true)}>Generate Password</ButtonComponent>
		</main>
	)
}

export default PasswordGenerator
