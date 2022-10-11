import React, { useState } from 'react'
import Checkbox from './Checkbox'

function Card() {
	const [password, setPassword] = useState({
		length: 8,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false
	})
	const [handleText, setHandleText] = useState(8)
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
		var x = document.getElementById('rangeInput').value
		setPassword({
			...password,
			length: x
		})
	}

	const InputNumber = () => {}

	function generatePassword() {
		const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
		const symbolsArray = [
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')',
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')'
		]

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
		<div className='mx-auto my-auto rounded overflow-hidden shadow-lg w-96 bg-white grid justify-items-center justify-center text-center'>
			<div class=' bg-gray-50 grid flex-col justify-center relative overflow-hidden sm:py-12'>
				<div class='max-w-7xl mx-auto'>
					<div class='relative group'>
						<div class='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
						<div className='relative grid'>
							<div class='relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6'>
								<svg class='w-8 h-8 text-purple-600' fill='none' viewBox='0 0 24 24'>
									<path
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1.5'
										d='M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z'
									></path>
								</svg>
								<div class='space-y-2'>
									<p class='text-slate-800'>Random password generator</p>
								</div>
								<div>dsads</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex px-6 py-4'>
				<div>
					<label>Password length</label>
				</div>
				<div>
					<input
						type='range'
						id='rangeInput'
						min='8'
						max='60'
						defaultValue='8'
						step='1'
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
