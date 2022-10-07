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
	const [passwordCopied, setPasswordCopied] = useState(false)

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	useEffect(() => {
		if (passwordCopied) setTimeout(() => setPasswordCopied(false), 3000)
	}, [passwordCopied])

	function handleCopy() {
		setPasswordCopied(copyPassword(password))
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

			<div
				className={`mt-6 transition-opacity duration-1000 ${
					passwordCopied ? 'opacity-1' : 'opacity-0'
				}`}
			>
				<div
					className='flex items-center p-4 space-x-4 w-full max-w-xs bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800'
					role='alert'
				>
					<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
						<svg
							aria-hidden='true'
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
						<span className='sr-only'>Check icon</span>
					</div>
					<div className='pl-4 text-sm font-normal text-white'>Password copied successfully.</div>
				</div>
			</div>
		</>
	)
}

export default PasswordGenerator
