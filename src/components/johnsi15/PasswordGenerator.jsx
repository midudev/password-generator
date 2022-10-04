import { useState } from 'react'

// prettier-ignore
export default function PasswordGenerator () {
	const [password, setPassword] = useState('')
	const [rangeValue, setRangeValue] = useState(6)

	const checkboxOptions = [
		'Include LowerCase Letters',
		'Include UpperCase Letters',
		'Include Numbers',
		'Include Symbols'
	]

	const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const passwordLength = rangeValue
	let passwordString = ''

	for (let i = 0; i <= passwordLength; i++) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		passwordString += chars.substring(randomNumber, randomNumber + 1)
	}

	const handleChangeRange = (e) => {
		console.log(e.target.value)
		setRangeValue(e.target.value)
	}

	const handleGenerate = (e) => {
		e.preventDefault()
		setPassword(passwordString)
	}

	return (
		<section className='PasswordGenerator'>
			<h1>Password Generator</h1>
			<div className='password'>{password}</div>
			<form onSubmit={handleGenerate}>
				<label htmlFor='characterLength'>
					Character length
					<span>{rangeValue}</span>
				</label>
				<input
					type='range'
					id='characterLength'
					value={rangeValue}
					min='1'
					max='30'
					name='characterLength'
					onChange={(e) => handleChangeRange(e)}
				/>

				<div className='options'>
					{checkboxOptions.map((option) => {
						const optionId = option.replaceAll(' ', '')
						return (
							<label htmlFor={optionId} key={optionId}>
								<input
									type='checkbox'
									id={optionId}
									name={optionId}
									value={optionId}
									className='mr-2 accent-yellow-300'
								/>
								{option}
							</label>
						)
					})}
				</div>
				<button type='submit'>Generate</button>
			</form>
		</section>
	)
}
