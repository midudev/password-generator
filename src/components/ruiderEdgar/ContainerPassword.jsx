import React, { useEffect, useState } from 'react'
import Password from './Password'
import Characteristics from './Characteristics'

const ContainerPassword = () => {
	const [newPassword, setNewPassword] = useState('')
	// -----function to get the lenght from the input------ //
	const getLenght = (sizeLenght) => {
		const chain = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM!#$%&/()=?¡¿'
		const characters = chain.split('')
		const newPassword = []
		for (let i = 0; i < sizeLenght; i++) {
			newPassword.push(characters[Math.floor(Math.random() * characters.length)])
		}
		useEffect(() => {
			setNewPassword(newPassword.toString().replace(/,/g, ''))
		}, [sizeLenght])
	}
	return (
		<section className='mx-auto mt-8'>
			<Password passwordGenerated={newPassword} />
			<Characteristics getLenght={getLenght} />
		</section>
	)
}

export default ContainerPassword
