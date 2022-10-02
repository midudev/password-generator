import React, { useState } from 'react'
import Notification from './Notification'

const PasswordGenerator = () => {
	const [rangeValue, setRangeValue] = useState(0)
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [notification, setNotification] = useState(false)

	const generatePassword = () => {
		const getRandomString = () => (Math.random() * 10).toString(36).replace('.', '')
		const tempPassword = Array.from({ length: rangeValue }, getRandomString).join('')
		const password = tempPassword.split('')

		return password.slice(0, rangeValue).join('')
	}

	const copyToClipboard = () => {
		if (!generatedPassword) {
			return
		}
		navigator.clipboard.writeText(generatedPassword)
		setNotification(true)
	}

	const handleNotification = () => setNotification(false)

	const CopyIcon = () => (
		<svg viewBox='0 0 24 24' fill='#ffffff' height='30px' width='30px'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
		</svg>
	)

	return (
		<div className='bg-[#03071e] text-white w-full h-full flex justify-start items-center flex-col'>
			<img
				src='https://i.ibb.co/QfV9GFr/master-password-generator-1-removebg-preview.png'
				alt='link image'
				className='-mt-28'
			/>

			{notification && <Notification handleNotification={handleNotification} />}

			<div className='bg-[#020413] p-14 text-center rounded-xl space-y-4 w-96'>
				<h1 className='text-xl'>Password Generator</h1>
				<p>Generated password:</p>
				<div className='flex justify-center items-center space-x-4'>
					<div className='overflow-scroll p-6 bg-[#03071e] w-80 h-18 rounded-xl'>
						<p className=''>{generatedPassword}</p>
					</div>
					<button onClick={copyToClipboard}>
						<CopyIcon />
					</button>
				</div>

				<input
					type='range'
					min={1}
					max={100}
					value={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
					className='cursor-pointer'
				/>
				<p>Password characters: {rangeValue}</p>
				<button
					onClick={() => setGeneratedPassword(generatePassword())}
					className='transition ease-in-out delay-150 block uppercase mx-auto shadow bg-[#B80000] hover:bg-[#A30000] focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded'
				>
					Generate Password
				</button>
			</div>
		</div>
	)
}

export default PasswordGenerator
