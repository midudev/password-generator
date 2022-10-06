import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'

const InputPassword = () => {
	const { password, generateAlert } = useContext(passwordContext)

	const handlerCopyPassword = () => {
		navigator.clipboard.writeText(password)
		generateAlert('Password copied to clipboard!', 5000, 'copy')
	}

	return (
		<div className='my-4 relative w-full'>
			<input
				type='text'
				value={password}
				disabled
				id='password-generated'
				className='block p-4 pr-20 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder='Click "Generate password"'
			/>
			<button
				type='button'
				onClick={handlerCopyPassword}
				className='flex items-center absolute h-full top-0 right-0 p-1.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
			>
				<svg
					className='w-4 h-4 mr-2'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
					></path>
				</svg>
				<span>Copy</span>
			</button>
		</div>
	)
}

export default InputPassword
