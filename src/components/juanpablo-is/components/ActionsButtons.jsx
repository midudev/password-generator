import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'
const ActionsButtons = () => {
	const {
		passwordLength,
		automaticGenerator,
		setAutomaticGenerator,
		optionsCharacter,
		generateAlert
	} = useContext(passwordContext)

	const handlerSaveConfiguration = () => {
		localStorage.setItem(
			'preferencies-password-generator',
			JSON.stringify({
				length: passwordLength,
				automaticGenerator,
				optionsCharacter
			})
		)
		generateAlert('Options saved!', 3000, 'options')
	}

	return (
		<div className='w-full flex gap-4 my-3 content-center items-center'>
			<button
				type='button'
				onClick={handlerSaveConfiguration}
				className='flex-1 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-blue-700  border-3'
			>
				Save options
				<svg
					fill='#fff'
					className='ml-2 -mr-1 w-5 h-5'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 30 30'
					width='30px'
					height='30px'
				>
					<path d='M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z' />
				</svg>
			</button>
			<div className='flex-1 flex items-center m-auto justify-center'>
				<input
					id='default-checkbox'
					type='checkbox'
					checked={automaticGenerator}
					onChange={() => setAutomaticGenerator(!automaticGenerator)}
					className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
				/>
				<label
					htmlFor='default-checkbox'
					className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Auto generator?
				</label>
			</div>
		</div>
	)
}

export default ActionsButtons
