import React, { useState, useEffect } from 'react'
import { getRandomPassword, copyPassword } from './utils/handlePassword'
import CopySvg from './icons/copySvg'

const NUMBERS = '0123456789'
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(12)

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	function handleCopy() {
		const success = copyPassword(password)
		// TODO: if success show toast
	}

	function handleGeneratePassword() {
		let charactersAvaliable = ''
		// TODO: if from checkbox
		charactersAvaliable += NUMBERS
		charactersAvaliable += LOWER_CASE
		charactersAvaliable += UPPER_CASE
		charactersAvaliable += SPECIAL

		setPassword(getRandomPassword(charactersAvaliable, passwordLength))
	}

	return (
		<>
			<h2 className='flex justify-center my-4 mt-0 font-medium leading-tight text-4xl text-blue-300'>
				Password Generator
			</h2>
			<div className='border border-white rounded-lg p-8 flex flex-col gap-y-4'>
				<div className='flex gap-2'>
					<label
						type='text'
						className='rounded-lg outline-0 py-2 px-2 text-gray-800 bg-white text-center w-96'
					>
						{password}
					</label>
					<button
						onClick={handleCopy}
						disabled={!password}
						className='border border-green-500 rounded-lg py-2 px-2'
					>
						<CopySvg />
					</button>
				</div>
				<label className='flex justify-center gap-2'>
					<span>Password length:</span>
					<span className='text-blue-300 font-bold'>{passwordLength}</span>
				</label>
				<input
					className='mb-4 accent-blue-300'
					type='range'
					min='1'
					max='30'
					value={passwordLength}
					onChange={({ target: { value } }) => {
						setPasswordLength(value)
					}}
				/>

				<button
					onClick={handleGeneratePassword}
					className='border border-white rounded-lg py-2 px-2'
				>
					Generate password
				</button>
			</div>
		</>
	)
}

export default PasswordGenerator
