import { useEffect } from 'react'
// Components
import InputPassword from './components/InputPassword'
import InputRange from './components/InputRange'
import CheckboxOptions from './components/CheckboxOptions'
import ActionsButtons from './components/ActionsButtons'

// Hooks
import useGeneratePassword from './hooks/useGeneratePassword'
import useLocalStorage from './hooks/useLocalStorage'
import useTimerAlert from './hooks/useTimerAlert'

// Contexts
import PasswordContext from './context/PasswordContext'

// Styles
import './index.css'

const App = () => {
	const { generateAlert, Alerts } = useTimerAlert()
	const [passwordLength, setPasswordLength] = useLocalStorage('length', '25')
	const [automaticGenerator, setAutomaticGenerator] = useLocalStorage('automaticGenerator', true)
	const [optionsCharacter, setOptionsCharacter] = useLocalStorage('optionsCharacter', {
		mayus: true,
		minus: true,
		numbers: true,
		symbols: true
	})
	const { password, generateNewPassword } = useGeneratePassword({
		length: passwordLength,
		optionsCharacter
	})

	const handlerCopyPassword = () => {
		navigator.clipboard.writeText(document.querySelector('#password-generated').value)
		generateAlert('Password copied to clipboard!', 5000, 'copy')
	}

	const handlerNewPassword = (delay = false) => {
		const alertPassword = () =>
			generateAlert(
				<>
					New password generated.
					<span
						className='text-blue-500 font-bold cursor-pointer pl-2'
						onClick={handlerCopyPassword}
					>
						Copy
					</span>
				</>,
				5000,
				'password'
			)

		if (delay) {
			const delayDebounceFn = setTimeout(() => {
				generateNewPassword()
				alertPassword()
			}, 300)

			return () => clearTimeout(delayDebounceFn)
		}

		generateNewPassword()
		alertPassword()
	}

	useEffect(() => {
		if (automaticGenerator) {
			return handlerNewPassword(true)
		}
	}, [passwordLength, optionsCharacter])

	return (
		<PasswordContext.Provider
			value={{
				password,
				generateNewPassword,
				optionsCharacter,
				setOptionsCharacter,
				passwordLength,
				setPasswordLength,
				automaticGenerator,
				setAutomaticGenerator,
				generateAlert
			}}
		>
			<div
				id='juanpablo-is'
				className='max-w-xl h-screen flex flex-col items-center justify-start text-center w-10/12 m-auto'
			>
				<div className='w-full flex flex-col justify-center flex-[2]'>
					<div className='flex flex-col justify-end flex-1 mb-5'>
						<h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
							Password Generator
						</h1>

						<p className='text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400'>
							Create strong and secure passwords
						</p>
					</div>
					<InputPassword />
				</div>

				<div className='flex flex-col w-full max-w-xl my-2  overflow-auto'>
					<hr className='my-2 sm:my-4' />
					<div className=''>
						<InputRange />
						<CheckboxOptions />
					</div>

					<hr className='my-2 sm:my-4' />

					<ActionsButtons />
				</div>

				<div className='flex-1 max-w-xl w-full py-2'>
					<button
						onClick={handlerNewPassword}
						className='inline-flex w-full justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
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

				<Alerts />
			</div>
		</PasswordContext.Provider>
	)
}

export default App
