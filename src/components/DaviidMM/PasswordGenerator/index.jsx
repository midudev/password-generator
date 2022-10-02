import React, { useState } from 'react'
import Button from '../Button'
import ColoredText from '../ColoredText'
import PasswordProperties from '../PasswordProperties'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordProps, setPasswordProps] = useState({
		length: 16,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true
	})
	const [statusText, setStatusText] = useState('')

	const generatePassword = () => {
		const characters = {
			uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			lowercase: 'abcdefghijklmnopqrstuvwxyz',
			numbers: '0123456789',
			symbols: '!@#$%^&*()_+-=[]{};:,./<>?'
		}

		const possibleCharacters = Object.keys(passwordProps).reduce((acc, prop) => {
			if (prop === 'length') return acc
			if (passwordProps[prop]) return acc + characters[prop]
			return acc
		}, '')

		let password = ''
		for (let i = 0; i < passwordProps.length; i++) {
			password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
		}
		setPassword(password)
		setStatusText('')
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		setStatusText('¡He copiado la contraseña a tu portapapeles 📋😄!')
	}

	return <div className='w-full p-4 rounded-3xl text-xl bg-white flex flex-col items-center gap-4'>
		<PasswordProperties properties={passwordProps} setProperties={setPasswordProps} />
		<Button onClick={generatePassword}>¡Dame una contraseña!</Button>
		{
			password && <div className='rounded-xl bg-purple-300 flex flex-row overflow-hidden items-stretch w-[500px]'>
				<ColoredText className='text-3xl font-semibold px-4 py-2 w-full overflow-hidden text-ellipsis whitespace-nowrap'>{password}</ColoredText>
				<button className='px-4 py-2 bg-purple-500 text-white transition-colors hover:bg-purple-600' onClick={copyPassword}>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
					</svg>
				</button>
			</div>
		}
		{
			statusText && <span>{statusText}</span>
		}
	</div>
}

export default PasswordGenerator