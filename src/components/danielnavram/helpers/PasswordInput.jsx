import React, { useState } from 'react'
import { usePassword } from '../hooks/usePassword'
import Clipboard from '../icons/Clipboard'
import ClipboardCheck from '../icons/ClipboardCheck'
import ConfirmToast from './ConfirmToast'

const PasswordInput = ({ isDisabled, setIsDisabled }) => {
	const { setGenerate, generatedPassword, copied, setCopy } = usePassword()
	const [isOpen, setOpen] = useState(false)
	const copyClipboard = () => {
		if (!isDisabled) {
			navigator.clipboard.writeText(generatedPassword)
			setCopy(true)
			setIsDisabled(true)
			setOpen(true)
		}
	}
	return (
		<div className='flex w-full'>
			<input
				id='password-generated'
				type='text'
				className='rounded-none rounded-l-lg outline-0 py-3 px-4 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Password'
				value={generatedPassword}
				onChange={({ target }) => setGenerate(target.value)}
			/>
			<span
				onClick={copyClipboard}
				disabled={isDisabled}
				className={`inline-flex items-center px-4 text-md ${
					isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
				} text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 dark:bg-gray-600 dark:text-gray-700 dark:border-gray-600`}
			>
				{copied ? <ClipboardCheck size='24' color='#48BB78' /> : <Clipboard size='24' />}
			</span>
			<ConfirmToast isOpen={isOpen} setOpen={setOpen} />
		</div>
	)
}

export default PasswordInput
