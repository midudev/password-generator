import React, { useState } from 'react'

const NUMBERS = '0123456789'
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SPECIAL = ' !#$%&()*+,-./:;<=>?@[]^_`{|}~'

function getRandomPassword(charactersAvaliable, length) {
	let randomPassword = ''
	for (let i = 0; i < length; i++) {
		randomPassword += charactersAvaliable.charAt(
			Math.floor(Math.random() * charactersAvaliable.length)
		)
	}
	return randomPassword
}

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')

	function handleSubmitForm(e) {
		e.preventDefault()
		// TODO: get form data
		// const formData = new FormData(e.target)

		let charactersAvaliable = ''
		// TODO: if from checkbox
		charactersAvaliable += NUMBERS
		charactersAvaliable += LOWER_CASE
		charactersAvaliable += UPPER_CASE
		charactersAvaliable += SPECIAL

		// TODO: get from slider
		const length = 22

		setPassword(getRandomPassword(charactersAvaliable, length))
	}

	return (
		<>
			<h2 className='flex justify-center my-4 mt-0 font-medium leading-tight text-4xl text-blue-300'>
				Password Generator
			</h2>
			<div className='border border-l-white rounded-lg p-8'>
				<form className='flex flex-col gap-y-4' onSubmit={handleSubmitForm}>
					<label
						id='password-generated'
						type='text'
						className='rounded-lg outline-0 py-2 px-2 text-gray-800 bg-white text-center w-96'
					>
						{password || 'Password'}
					</label>

					<button type='submit' className='border border-l-white rounded-lg py-2 px-2'>
						Generate password
					</button>
				</form>
			</div>
		</>
	)
}

export default PasswordGenerator
