import { useState } from 'react'

const PassGenerator = () => {
	const [password, setPass] = useState('')
	const [length, sLength] = useState(9)

	const setup = () => {
		setPass('')
		const lowerCaseLetters = Array.from('abcdefghijklmnopqrstuvwxyz')
		const upperCaseLetters = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
		const numbers = Array.from('1234567890')
		const specialCharacters = Array.from('!@#$%^*')
		const allCharacters = lowerCaseLetters.concat(upperCaseLetters, numbers, specialCharacters)
		return allCharacters
	}
	const generate = () => {
		let allCharacters = setup()
		for (let i = 0; i < length; i++) {
			setPass((p) => p + allCharacters[Math.floor(Math.random() * allCharacters.length)])
		}
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		alert('Copied to clipboard')
	}

	const setLength = (value) => {
		sLength(value)
	}
	return (
		<section className='h-screen w-1/3 mx-auto flex flex-col gap-4 justify-center'>
			<h1 className='text-xl self-center' style={{ color: 'white', fontWeight: 'bold' }}>
				Password Generator by:
			</h1>
			<a href='https://github.com/jhoserpacheco/' target='_blank' className='text-xl self-center'>
				<img
					className='w-40 h-40 self-center'
					src='https://avatars.githubusercontent.com/u/44657472?v=4'
					alt='jhoserpacheco'
					srcset=''
				/>
			</a>
			<h1 className='text-xl self-center' style={{ color: 'white', fontWeight: 'bold' }}>
				<a href='https://github.com/jhoserpacheco/' target='_blank'>
					{' '}
					Jhoser Pacheco
				</a>
			</h1>
			<div className='flex gap-3'>
				<input type='text' value={password} className='p-2 w-full' readOnly />
				<button
					className='h-25 w-20 rounded'
					onClick={copyPassword}
					style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#a7a7cc' }}
				>
					Copy
				</button>
			</div>
			<button
				className='rounded text-xl'
				onClick={generate}
				style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#a7a7cc' }}
			>
				Generate Password
			</button>
			<div className='self-center '>
				<input
					className='self-center '
					type='range'
					min='8'
					max='50'
					value={length}
					onChange={(value) => setLength(value.target.value)}
				/>
			</div>
			<label
				className='self-center text-xl'
				style={{ color: '#a7a7cc' }}
			>{`Password Length: ${length}`}</label>
		</section>
	)
}

export default PassGenerator
