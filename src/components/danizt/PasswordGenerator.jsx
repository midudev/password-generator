import React, { useState } from 'react'
import { getRandomPassword, copyPassword } from './utils/handlePassword'

const NUMBERS = '0123456789'
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(12)

	function handleCopy() {
		const success = copyPassword()
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
			<div className='border border-l-white rounded-lg p-8 flex flex-col gap-y-4'>
				<label
					id='password-generated'
					type='text'
					className='rounded-lg outline-0 py-2 px-2 text-gray-800 bg-white text-center w-96'
				>
					{password || '👇 Generate a strong password 👇'}
				</label>

				<div className='flex flex-row gap-4'>
					<button
						onClick={handleGeneratePassword}
						className='border border-l-white rounded-lg py-2 px-2 w-2/3'
					>
						Generate password
					</button>
					<button onClick={handleCopy} className='border border-l-white rounded-lg py-2 px-2 w-1/3'>
						Copy
					</button>
				</div>
			</div>
		</>
	)
}

export default PasswordGenerator
