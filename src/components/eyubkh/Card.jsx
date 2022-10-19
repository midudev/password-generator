import { useState } from 'react'

import animation from './utils/animation'
import generatePassword from './utils/generatePassword'

import { Password } from './Password'
import { Input } from './Input'
import { Button } from './Button'

import './style/card.css'

export const Card = () => {
	const [password, setPassword] = useState('need a password?')
	const [initValue, setInitValue] = useState(10)

	function handlerGeneratePassword(event) {
		event.preventDefault()
		setPassword(generatePassword(initValue))
	}

	function handlerRange(event) {
		event.preventDefault()
		setInitValue(Number(event.target.value))
		animation(initValue)
	}

	return (
		<div id='eyubkh-generate-card'>
			<Password>{password}</Password>
			<Input handler={handlerRange} value={initValue} />
			<Button handler={handlerGeneratePassword} />
		</div>
	)
}
