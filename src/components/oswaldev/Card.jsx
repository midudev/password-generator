import React, { useState } from 'react'
import Checkbox from './Checkbox'

function Card() {
	const [password, setPassword] = useState({
		length: 5,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false
	})
	const [handleText, setHandleText] = useState('')
	const [copiedText, setCopiedText] = useState(false)

	const handleChangeUppercase = () => {
		setPassword({
			...password,
			uppercase: !password.uppercase
		})
	}

	const handleChangeLowercase = () => {
		setPassword({
			...password,
			lowercase: !password.lowercase
		})
	}

	const handleChangeNumbers = () => {
		setPassword({
			...password,
			numbers: !password.numbers
		})
	}

	const handleChangeSymbols = () => {
		setPassword({
			...password,
			symbols: !password.symbols
		})
	}

	const setPasswordLength = (val) => {
		setPassword({
			...password,
			length: val
		})
	}

	function generatePassword() {
		const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
		const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

		const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97)
		const lowerCaseLetters = characterCodes.map((code) => String.fromCharCode(code))
		const upperCaseLetters = lowerCaseLetters.map((letter) => letter.toUpperCase())

		const { length, uppercase, lowercase, numbers, symbols } = password

		const generateTheWord = (length, uppercase, lowercase, numbers, symbols) => {
			const availableCharacters = [
				...(lowercase ? lowerCaseLetters : []),
				...(uppercase ? upperCaseLetters : []),
				...(numbers ? numbersArray : []),
				...(symbols ? symbolsArray : [])
			]
			const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)
			const characters = shuffleArray(availableCharacters).slice(0, length)
			setHandleText(characters.join(''))
			return characters
		}

		generateTheWord(length, uppercase, lowercase, numbers, symbols)
	}

	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg bg-white grid justify-items-center justify-center text-center'>
			<h1>Generate random password</h1>
			<div className='flex px-6 py-4'>
				<div>
					<label>Password length</label>
				</div>
				<div>
					<input
						type='range'
						value={handleText}
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include uppercase letters</label>
				</div>
				<div>
					<Checkbox value={password.uppercase} onChange={handleChangeUppercase} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include lowercase letters</label>
				</div>
				<div>
					<Checkbox value={password.lowercase} onChange={handleChangeLowercase} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include numbers</label>
				</div>
				<div>
					<Checkbox value={password.numbers} onChange={handleChangeNumbers} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Include symbols</label>
				</div>
				<div>
					<Checkbox value={password.symbols} onChange={handleChangeSymbols} />
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<input type='text' value={handleText} onChange={(e) => setHandleText(e.target.value)} />
				</div>
				<div>
					<button
						onClick={() => {
							if (handleText.length > 0) {
								navigator.clipboard.writeText(handleText)
								setCopiedText(true)
								setInterval(() => {
									setCopiedText(false)
								}, 2000)
							}
						}}
					>
						{copiedText ? 'Copied!' : 'Copy to clipboard'}
					</button>
				</div>
			</div>
			<div className='border-4 rounded-full'>
				<button onClick={generatePassword}>Generate password</button>
			</div>
		</div>
	)
}

export default Card
