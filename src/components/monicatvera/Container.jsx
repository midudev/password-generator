import React, { useState } from 'react'
import Button from './Button'
import Password from './Password'
import './style/style.css'

const Container = () => {
	const [characterLength, setCharacterLength] = useState(50)
	const [password, setPassword] = useState('')

	const createPassword = () => {
		const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?'
		let generatePassword = ''
		for (let i = 0; i < characterLength / 5; i++) {
			generatePassword += characters.charAt(Math.floor(Math.random() * characters.length))
		}
		setPassword(generatePassword)
		setIsCopied(false)
	}

	return (
		<div
			className='md:w-[33.75rem]  w-[21.43rem] px-[1rem] py-[1rem] md:py-[1.18rem] md:px-[2rem] '
			style={{
				background: '#24232c',
				color: '#e6e5ea'
			}}
		>
			<h1 className='font-medium leading-tight text-3xl mt-0 mb-2'>Generador de contraseñas</h1>
			<div className='flex justify-between items-center mb-[1.56rem]'>
				<div className='text-[1.125rem]'>Caracteres</div>
				<div className='text-[#A4FFAF] text-[2rem]'>{Math.floor(characterLength / 5)}</div>
			</div>
			<input
				type='range'
				value={characterLength}
				onChange={(e) => setCharacterLength(+e.target.value)}
				className='mb-[2.62rem] md:w-[29.75rem] w-[19.43rem]'
			/>
			<Button onClick={createPassword}> GENERAR PASSWORD </Button>
			<Password password={password} />
		</div>
	)
}

export default Container
