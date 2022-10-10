import React, { useState, useEffect } from 'react'
import Toast from './Toast'
import { getRandomPassword, copyPassword } from '../utils/handlePassword'
import CopySvg from '../icons/copySvg'
import { hover1Style, hover2Style } from '../styles/hover'

const NUMBERS = '0123456789'
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL = '!#$%&()*+,-./:;<=>?@[]^_`{|}~'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(12)
	const [passwordCopied, setPasswordCopied] = useState(false)
	const [chkNumbers, setChkNumbers] = useState(true)
	const [chkLowercase, setChkLowercase] = useState(true)
	const [chkUppercase, setChkUppercase] = useState(true)
	const [chkSpecial, setChkSpecial] = useState(true)

	useEffect(() => {
		handleGeneratePassword()
	}, [])

	useEffect(() => {
		if (passwordCopied) setTimeout(() => setPasswordCopied(false), 3000)
	}, [passwordCopied])

	function handleCopy() {
		setPasswordCopied(copyPassword(password))
	}

	function handleChangeChkNumbers() {
		setChkNumbers(!chkNumbers)
	}

	function handleChangeChkLowercase() {
		setChkLowercase(!chkLowercase)
	}

	function handleChangeChkUppercase() {
		setChkUppercase(!chkUppercase)
	}

	function handleChangeChkSpecial() {
		setChkSpecial(!chkSpecial)
	}

	function handleGeneratePassword() {
		let charactersAvaliable = ''
		if (chkNumbers) charactersAvaliable += NUMBERS
		if (chkLowercase) charactersAvaliable += LOWER_CASE
		if (chkUppercase) charactersAvaliable += UPPER_CASE
		if (chkSpecial) charactersAvaliable += SPECIAL

		setPassword(getRandomPassword(charactersAvaliable, passwordLength))
	}

	return (
		<>
			<h2 className='flex justify-center my-4 mt-0 font-medium leading-tight text-4xl text-cyan-500'>
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
					<button onClick={handleCopy} className={hover1Style}>
						<span className={`${hover2Style} py-2 px-2`}>
							<CopySvg />
						</span>
					</button>
				</div>
				<label className='flex justify-center gap-2'>
					<span>Password length:</span>
					<span className='text-cyan-500 font-bold'>{passwordLength}</span>
				</label>
				<input
					className='mb-4 accent-cyan-500'
					type='range'
					min='1'
					max='30'
					value={passwordLength}
					onChange={({ target: { value } }) => {
						setPasswordLength(value)
					}}
				/>

				<h3 className='mb-1'>Configuration:</h3>
				<ul className='items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
					<li className='w-full border-b border-gray-600 sm:border-b-0 sm:border-r'>
						<div className='flex items-center pl-3'>
							<input
								id='danizt_chk_numbers'
								type='checkbox'
								value=''
								className='w-4 h-4 rounded'
								defaultChecked={chkNumbers}
								onChange={handleChangeChkNumbers}
							/>
							<label htmlFor='danizt_chk_numbers' className='py-3 ml-2 w-full text-sm font-medium'>
								Numbers
							</label>
						</div>
					</li>
					<li className='w-full border-b border-gray-600 sm:border-b-0 sm:border-r'>
						<div className='flex items-center pl-3'>
							<input
								id='danizt_chk_lower_case'
								type='checkbox'
								value=''
								className='w-4 h-4 rounded'
								defaultChecked={chkLowercase}
								onChange={handleChangeChkLowercase}
							/>
							<label
								htmlFor='danizt_chk_lower_case'
								className='py-3 ml-2 w-full text-sm font-medium'
							>
								Lowercase
							</label>
						</div>
					</li>
					<li className='w-full border-b border-gray-600 sm:border-b-0 sm:border-r'>
						<div className='flex items-center pl-3'>
							<input
								id='danizt_chk_upper_case'
								type='checkbox'
								value=''
								className='w-4 h-4 rounded'
								defaultChecked={chkUppercase}
								onChange={handleChangeChkUppercase}
							/>
							<label
								htmlFor='danizt_chk_upper_case'
								className='py-3 ml-2 w-full text-sm font-medium'
							>
								Uppercase
							</label>
						</div>
					</li>
					<li className='w-full border-b border-gray-600 sm:border-b-0 sm:border-r'>
						<div className='flex items-center pl-3'>
							<input
								id='danizt_chk_special'
								type='checkbox'
								value=''
								className='w-4 h-4 rounded'
								defaultChecked={chkSpecial}
								onChange={handleChangeChkSpecial}
							/>
							<label htmlFor='danizt_chk_special' className='py-3 ml-2 w-full text-sm font-medium'>
								Special
							</label>
						</div>
					</li>
				</ul>
				<button onClick={handleGeneratePassword} className={hover1Style}>
					<span className={`${hover2Style} py-2 px-2`}>Generate password</span>
				</button>
			</div>

			<div
				className={`mt-6 transition-opacity duration-1000 ${
					passwordCopied ? 'opacity-1' : 'opacity-0'
				}`}
			>
				<Toast text='Password copied successfully.' />
			</div>
		</>
	)
}

export default PasswordGenerator
