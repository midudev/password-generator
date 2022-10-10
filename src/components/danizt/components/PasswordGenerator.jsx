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
					className='mb-1 accent-cyan-500'
					type='range'
					min='1'
					max='30'
					value={passwordLength}
					onChange={({ target: { value } }) => {
						setPasswordLength(value)
					}}
				/>

				<h3 className='mb-1'>Configuration:</h3>

				<div className='flex flex-wrap px-6 mb-2'>
					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkNumbers}
							onChange={handleChangeChkNumbers}
						/>
						Numbers
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkLowercase}
							onChange={handleChangeChkLowercase}
						/>
						Lowercase
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkUppercase}
							onChange={handleChangeChkUppercase}
						/>
						Uppercase
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkSpecial}
							onChange={handleChangeChkSpecial}
						/>
						Special
					</label>
				</div>

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
