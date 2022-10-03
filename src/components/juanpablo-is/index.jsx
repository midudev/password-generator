import { useEffect, useState } from 'react'
import useGeneratePassword from './hooks/useGeneratePassword'

const useStateWithLocalstorage = (prop, defaultValue) => {
	const [state, setState] = useState(() => {
		const localState = JSON.parse(localStorage.getItem('preferencies-password-generator') || '{}')
		return localState[prop] == null ? defaultValue : localState[prop]
	})

	return [state, setState]
}

const App = () => {
	const { password, generateNewPassword } = useGeneratePassword({})
	const [passwordLength, setPasswordLength] = useStateWithLocalstorage('length', '25')
	const [alert, setAlert] = useState('')
	const [automaticGenerator, setAutomaticGenerator] = useStateWithLocalstorage(
		'automaticGenerator',
		true
	)
	const [optionsCharacter, setOptionsCharacter] = useStateWithLocalstorage('optionsCharacter', {
		mayus: true,
		minus: true,
		numbers: true,
		symbols: true
	})

	const handlerNewPassword = () => {
		setAlert('')

		const delayDebounceFn = setTimeout(() => {
			generateNewPassword(passwordLength, Object.keys(optionsCharacter))
			setAlert('New password generated.')
		}, 300)

		return () => clearTimeout(delayDebounceFn)
	}

	const handlerChangeCharacter = (e) => {
		setOptionsCharacter((prev) => {
			if (e.target.checked) {
				return { ...prev, [e.target.id]: e.target.checked }
			}

			const newState = { ...prev }
			delete newState[e.target.id]
			return newState
		})
	}

	const handlerCopyPassword = () => {
		navigator.clipboard.writeText(password)
	}

	const handlerSaveConfiguration = () => {
		localStorage.setItem(
			'preferencies-password-generator',
			JSON.stringify({
				length: passwordLength,
				automaticGenerator,
				optionsCharacter
			})
		)
	}

	useEffect(() => {
		handlerNewPassword()
	}, [])

	useEffect(() => {
		if (automaticGenerator) {
			return handlerNewPassword()
		}
	}, [passwordLength, optionsCharacter])

	useEffect(() => {
		if (password) {
			const delayDebounceFn = setTimeout(() => {
				setAlert('')
			}, 3000)

			return () => clearTimeout(delayDebounceFn)
		}
	}, [password])

	return (
		<div className='h-screen flex flex-col items-center justify-center text-center w-10/12 m-auto'>
			<h1 className='mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
				Password Generator
			</h1>

			<p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
				Create strong and secure passwords
			</p>

			<div className='flex flex-col w-full max-w-xl my-4'>
				{/* Password input */}
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

				<hr className='my-4' />

				{/* Password length input range */}
				<div className='my-2 flex items-center w-full gap-4 flex-col sm:flex-row'>
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

				{/* Options characters used */}
				<div className='my-2 flex items-center w-full gap-4 flex-col sm:flex-row'>
					<div className='flex items-center'>
						<p className='whitespace-nowrap text-lg text-gray-500 lg:text-xl dark:text-gray-400 font-bold'>
							Character used:
						</p>
					</div>

					<ul className='items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
						<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
							<div className='flex items-center pl-3'>
								<input
									id='mayus'
									type='checkbox'
									value='mayus'
									defaultChecked={optionsCharacter.mayus}
									onChange={handlerChangeCharacter}
									disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.mayus}
									className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
								/>
								<label
									htmlFor='mayus'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									ABC
								</label>
							</div>
						</li>
						<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
							<div className='flex items-center pl-3'>
								<input
									id='minus'
									type='checkbox'
									value='minus'
									defaultChecked={optionsCharacter.minus}
									onChange={handlerChangeCharacter}
									disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.minus}
									className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
								/>
								<label
									htmlFor='minus'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									abc
								</label>
							</div>
						</li>
						<li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600'>
							<div className='flex items-center pl-3'>
								<input
									id='symbols'
									type='checkbox'
									value='symbols'
									defaultChecked={optionsCharacter.symbols}
									onChange={handlerChangeCharacter}
									disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.symbols}
									className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
								/>
								<label
									htmlFor='symbols'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									#!%$&
								</label>
							</div>
						</li>
						<li className='w-full dark:border-gray-600'>
							<div className='flex items-center pl-3'>
								<input
									id='numbers'
									type='checkbox'
									value='numbers'
									defaultChecked={optionsCharacter.numbers}
									onChange={handlerChangeCharacter}
									disabled={Object.keys(optionsCharacter).length === 1 && optionsCharacter.numbers}
									className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
								/>
								<label
									htmlFor='numbers'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									12345
								</label>
							</div>
						</li>
					</ul>
				</div>
				<hr className='my-4' />

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

				<div className='w-full flex gap-4 my-3 content-center items-center'>
					<button
						type='button'
						onClick={handlerSaveConfiguration}
						className='flex-1 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-blue-700  border-3'
					>
						Save configuration
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
							Automatic generator?
						</label>
					</div>
				</div>
			</div>

			{alert && (
				<div className='mt-3 absolute top-0 left-0 right-0 flex flex-col items-center'>
					<div
						id='toast-default'
						className='m-1 sm:m-2 flex items-center p-4 w-72 sm:w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
						role='alert'
					>
						<div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
							<svg
								aria-hidden='true'
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<div className='ml-3 text-sm font-normal'>
							{alert}
							<span
								className='text-blue-500 font-bold cursor-pointer pl-2'
								onClick={handlerCopyPassword}
							>
								Copy
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
