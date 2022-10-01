import React from 'react'
import Card from '@components/danicc/Card'

import generatePassword from './generate-password'
import Output from './Output'

function PasswordGenerator() {
	const [password, setPassword] = React.useState('')
	const [rangeValue, setRangeValue] = React.useState(6)

	// TODO: add symbol options and use object values
	// to support default checked
	const checkboxOptions = {
		includeLowercaseLetters: 'Include LowerCase Letters',
		includeUppercaseLetters: 'Include UpperCase Letters',
		includeNumbers: 'Include Numbers'
	}

	function handleGenerate(event) {
		event.preventDefault()
		const formData = new FormData(event.target)

		const charactersOpts = Object.keys(checkboxOptions).reduce((accum, key) => {
			return {
				...accum,
				[key]: !!formData.get(key)
			}
		}, {})
		const newPassword = generatePassword(charactersOpts, rangeValue)
		setPassword(newPassword)
	}

	return (
		<div className='flex flex-col gap-y-2 text-slate-200'>
			<Card>
				<Output value={password} placeholder='generate a password' />
			</Card>

			<Card>
				<form className='flex flex-col gap-y-4' onSubmit={handleGenerate}>
					<label htmlFor='character-length' className='flex'>
						<span className='flex-1'>Character length</span>
						<span className='text-yellow-300 font-bold'>{rangeValue}</span>
					</label>
					<input
						className='my-4 accent-yellow-300'
						id='character-length'
						type='range'
						min='1'
						max='30'
						name='characterLength'
						value={rangeValue}
						onChange={({ target: { value } }) => {
							setRangeValue(value)
						}}
					/>

					{Object.entries(checkboxOptions).map(([optionId, optionLabel]) => (
						<label htmlFor={optionId} key={optionId}>
							<input
								type='checkbox'
								id={optionId}
								name={optionId}
								value={optionId}
								className='mr-2 accent-yellow-300'
							/>
							{optionLabel}
						</label>
					))}

					<button type='submit' className='border border-yellow-300 py-2 text-yellow-300'>
						Generate
					</button>
				</form>
			</Card>
		</div>
	)
}

export default PasswordGenerator
