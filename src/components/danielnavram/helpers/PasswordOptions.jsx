import React from 'react'
import { usePassword } from '../hooks/usePassword'
import Button from './Button'

const PasswordOptions = ({ setIsDisabled }) => {
	const { setLength, length } = usePassword()
	return (
		<div className='w-full p-4 mt-6 bg-gray-50 rounded-lg text-gray-400 border border-gray-300 shadow-md dark:bg-gray-700 dark:border-gray-600'>
			<div>
				<p className='mb-2'>Select the length of your password (6 - 20 characters):</p>
				<div className='flex items-center flex-column'>
					<input
						type='range'
						name='password-length'
						className='basis-full h-2 mr-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400'
						min='8'
						max='20'
						step='1'
						value={length}
						onChange={({ target }) => setLength(target.value)}
					/>
					<span className='basis-14 text-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600'>
						{length}
					</span>
				</div>
			</div>
			<Button setIsDisabled={setIsDisabled} />
		</div>
	)
}

export default PasswordOptions
