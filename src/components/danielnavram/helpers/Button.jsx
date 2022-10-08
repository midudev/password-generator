import React from 'react'
import Key from '../icons/Key'
import { generatePassword } from '../utils/passwordGenerator'
import { usePassword } from '../hooks/usePassword'

const Button = ({ setIsDisabled }) => {
	const { setGenerate, length, setCopy } = usePassword()
	const handleClick = () => {
		const newPassword = generatePassword(length)
		setGenerate(newPassword)
		setCopy(false)
		setIsDisabled(false)
	}
	return (
		<button type='button' onClick={handleClick} className='w-full mt-4 text-white bg-orange-500 hover:bg-orange-700 focus:outline-none active:bg-orange-700 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-orange-500 dark:hover:bg-orange-700 transition-all'>
			Generate Password
			<Key size='24' />
		</button>
	)
}

export default Button
