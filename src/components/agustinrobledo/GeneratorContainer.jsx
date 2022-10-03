import React, { useState } from 'react'

const GeneratorContainer = () => {
	const [characterLength, setCharacterLength] = useState(1)
	const [password, setPassword] = useState('')
	const [notification, setNotification] = useState(false)

	const passwordGenerator = (e) => {
		e.preventDefault()
		const letters =
			'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz1234567890!"·$%&/()=?¿-.,;:_'
		let generatedPassword = ''
		for (let i = 0; i < characterLength; i++) {
			const randomNumber = Math.floor(Math.random() * (letters.length - 0 + 0))
			const character = letters[randomNumber]
			console.log(randomNumber, 'randomNumber')
			console.log(character, 'character')
			generatedPassword = generatedPassword + character
		}
		setPassword(generatedPassword)
	}

	const copyText = () => {
		navigator.clipboard.writeText(password)

		setNotification(true)

		setTimeout(() => {
			setNotification(false)
		}, 3000)
	}

	return (
		<main className='flex justify-center items-center text-white w-full h-full text-lg gap-10'>
			<form
				className='flex flex-col gap-4 w-1/2 p-6 rounded-md bg-slate-600'
				onSubmit={passwordGenerator}
			>
				<h1 className='text-2xl font-bold'>Generador de contraseñas</h1>
				<p>
					by{' '}
					<a
						className='hover:underline underline-offset-1'
						href='https://github.com/agustinrobledo'
					>
						agustinrobledo
					</a>
				</p>
				<div className='rounded border-slate-800  bg-slate-700 border-4 flex justify-between py-2 items-center'>
					<span className='w-1/2 text-slate-400 px-4'>{password}</span>
					<button
						onClick={copyText}
						className={`w-30 rounded bg-slate-600 p-5 mr-2 ${!password.length && 'opacity-20'}`}
						type='button'
						disabled={!password.length}
					>
						Copiar 📝
					</button>
				</div>
				{notification && (
					<span className='bg-green-400 flex justify-center rounded text-black text-lg font-semibold animate-pulse'>
						Texto copiado con éxito
					</span>
				)}
				<div className='flex justify-around'>
					<input
						type='range'
						min='1'
						max='30'
						className='w-1/2'
						value={characterLength}
						onChange={(e) => setCharacterLength(e.target.value)}
					/>
					<p>
						Numero de characteres: <span>{characterLength}</span>
					</p>
				</div>
				<button className='bg-blue-400 rounded p-3' onClick={passwordGenerator} type='submit'>
					Generar contraseña
				</button>
			</form>
		</main>
	)
}

export default GeneratorContainer
