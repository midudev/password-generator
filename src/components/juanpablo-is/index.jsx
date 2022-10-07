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
		if (delay) {
			const delayDebounceFn = setTimeout(() => {
				generateNewPassword()
			}, 300)

			return () => clearTimeout(delayDebounceFn)
		}

		generateNewPassword()
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
				</div>

				<ActionsButtons handlerNewPassword={handlerNewPassword} />
				<Alerts />
			</div>
		</PasswordContext.Provider>
	)
}

export default App
