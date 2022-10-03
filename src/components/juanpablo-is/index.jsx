import { useEffect, useState } from 'react'

const App = () => {
	const [passwordLength, setPasswordLength] = useState('25')
	const password = ""

	return (
		<div className='h-screen flex flex-col items-center justify-center text-center w-10/12 m-auto'>
			<h1 className='mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
				Random Password Generator
			</h1>

			<p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
				Create strong and secure passwords to keep your account safe online.
			</p>

			<div className='flex flex-col w-full max-w-xl'>
				<div className='my-4 relative w-full'>
					<input
						type='text'
						value={password}
						disabled
						className='block p-4 pr-20 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Buscando...'
					/>
					<button
						type='button'
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

				<div className='my-4 flex items-center w-full gap-4 flex-col sm:flex-row'>
					<div className='flex items-center'>
						<p className='whitespace-nowrap text-lg text-gray-500 lg:text-xl dark:text-gray-400 font-bold'>
							Password length: <span className='px-5 font-normal'>{passwordLength}</span>
						</p>
					</div>
					<input
						id='default-range'
						className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
						type='range'
						value={passwordLength}
						step={1}
						min={1}
						max={50}
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
				</div>
			</div>

			<button
				onClick={handlerNewPassword}
				className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
			>
				Generate password
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
		</div>
	)
}

export default App
