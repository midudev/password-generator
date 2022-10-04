import React, { useState, useCallback, useEffect } from 'react'

const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(12)
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [charsLower, setCharsLower] = useState(true)
	const [charsUpper, setCharsUpper] = useState(true)
	const [charsNumeric, setCharsNumeric] = useState(true)
	const [charsSymbols, setCharsSymbols] = useState(true)

	const chars = {
		lower: 'abcdefghijklmnopqrstuvwxyz',
		upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		numeric: '0123456789',
		symbols: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
	}

	const CopyIcon = () => (
		<svg viewBox='0 0 24 24' fill='currentColor'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
		</svg>
	)

	const handleCopyButton = useCallback(() => {
		navigator.clipboard.writeText(generatedPassword)
	}, [generatedPassword])

	const handlePasswordLength = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPasswordLength(event.target.value)
	}

	const handleChangeOptions = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
		switch (target.id) {
			case 'charsLower':
				setCharsLower(target.checked)
				break

			case 'charsUpper':
				setCharsUpper(target.checked)
				break

			case 'charsNumeric':
				setCharsNumeric(target.checked)
				break

			default:
				setCharsSymbols(target.checked)
				break
		}
	}, [])

	const shuffleArray = useCallback((str: string) => {
		const strArray = str.split('')

		for (let i = strArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))

			const temp = strArray[i]

			strArray[i] = strArray[j]
			strArray[j] = temp
		}

		return strArray.join('')
	}, [])

	const generatePassword = useCallback(() => {
		const password = shuffleArray(
			(charsLower ? chars.lower : '') +
				(charsUpper ? chars.upper : '') +
				(charsNumeric ? chars.numeric : '') +
				(charsSymbols ? chars.symbols : '')
		)

		setGeneratedPassword(password.substring(0, passwordLength))
	}, [charsLower, charsUpper, charsNumeric, charsSymbols, passwordLength])

	useEffect(() => {
		generatePassword()
	}, [charsLower, charsUpper, charsNumeric, charsSymbols, passwordLength])

	return (
		<div className='grid w-full h-screen content-center bg-slate-900'>
			<div className='w-full max-w-[500px] mx-auto rounded-lg bg-slate-800 shadow p-5 text-gray-300'>
				<div className='relative mb-2'>
					<input
						type='text'
						className='w-full pl-3 pr-10 py-2 border-2 rounded-md focus:outline-none transition-colors bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						placeholder='Password Generated'
						disabled
						value={generatedPassword}
					/>

					<button
						className='block w-7 h-7 text-center absolute top-2 right-2'
						onClick={handleCopyButton}
					>
						<CopyIcon />
					</button>
				</div>

				<div className='mb-2'>
					<label className='block text-xs font-semibold mb-2'>PASSWORD LENGTH</label>

					<input
						className='w-full px-3 py-2 mb-1 border-2 rounded-md stransition-colors bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						placeholder='Length'
						type='number'
						min='1'
						max='30'
						step='1'
						value={passwordLength}
						onChange={handlePasswordLength}
					/>

					<input
						className='w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						type='range'
						min='1'
						max='30'
						step='1'
						value={passwordLength}
						onChange={handlePasswordLength}
					/>
				</div>

				<div className='grid grid-cols-2'>
					<div className='px-2'>
						<label htmlFor='charsLower' className='flex items-start'>
							<input
								className='rounded focus:ring-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 ring-offset-gray-800'
								id='charsLower'
								type='checkbox'
								defaultChecked={true}
								value={charsLower}
								onChange={handleChangeOptions}
							/>

							<span className='ml-2 text-sm font-medium'>LOWERCASE</span>
						</label>
					</div>

					<div className='px-2'>
						<label htmlFor='charsUpper'>
							<input
								type='checkbox'
								className='rounded focus:ring-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 ring-offset-gray-800'
								id='charsUpper'
								defaultChecked={true}
								value={charsUpper}
								onChange={handleChangeOptions}
							/>

							<span className='ml-2 text-sm font-medium'>UPPERCASE</span>
						</label>
					</div>

					<div className='px-2'>
						<label htmlFor='charsNumeric'>
							<input
								type='checkbox'
								className='rounded focus:ring-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 ring-offset-gray-800'
								id='charsNumeric'
								defaultChecked={true}
								value={charsNumeric}
								onChange={handleChangeOptions}
							/>

							<span className='ml-2 text-sm font-medium'>NUMBERS</span>
						</label>
					</div>

					<div className='px-2'>
						<label htmlFor='charsSymbols'>
							<input
								type='checkbox'
								className='rounded focus:ring-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 ring-offset-gray-800'
								id='charsSymbols'
								defaultChecked={true}
								value={charsSymbols}
								onChange={handleChangeOptions}
							/>
							<span className='ml-2 text-sm font-medium'>SYMBOLS</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PasswordGenerator
