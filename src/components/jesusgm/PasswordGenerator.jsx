import { useEffect, useState } from 'react'
import { generatePw } from './generatePassword'

import './styles.css'

const DEFAULT_LENGTH = 10

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Button = ({ children, type = 'button', onClick = () => {}, className = '' }) => {
	return (
		<button className={`btn special ${className}`} type={type} onClick={onClick}>
			{children}
		</button>
	)
}

const Toast = ({ visible = false, msg = '' }) => (
	<div className={`toast ${visible ? 'visible' : 'hidden'}`}>
		<div>{msg}</div>
	</div>
)

const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(DEFAULT_LENGTH)
	const [passwords, setPassword] = useState([])
	const [toastVisible, setToastVisible] = useState(false)
	useEffect(() => {
		if (toastVisible) {
			setTimeout(() => {
				setToastVisible(false)
			}, 2000)
		}
	}, [toastVisible])

	const handleSubmit = (event) => {
		event.preventDefault()

		const newPassword = generatePw({ length: passwordLength })

		setPassword([newPassword, ...passwords.slice(0, 9)])
	}

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text)
		setToastVisible(true)
	}

	return (
		<section id='jesusgm'>
			<form className='relative mb-4' onSubmit={handleSubmit}>
				<div className='flex mt-4 mb-8 justify-between items-center gap-4'>
					<label
						htmlFor='default-range'
						className='block mb-2 text-sm font-medium text-gray-100 dark:text-gray-100'
					>
						Select password lenght
					</label>
					<input
						className='flex-grow h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
						id='default-range'
						type='range'
						min='5'
						max='30'
						value={passwordLength}
						onChange={(e) => setPasswordLength(e.target.value)}
					/>
					<span>{passwordLength}</span>
					<Button type='submit'>Generate Password</Button>
				</div>
			</form>
			<div className='rounded-md border p-4'>
				<h4 className='text-2xl mb-4 text-center'>Last {passwords.length} generated passwords</h4>
				<ul className='text-center  flex flex-col gap-2'>
					{passwords.map((password) => (
						<li className='prose w-full max-w-full'>
							<span className='text-white text-xl'>{password}</span>
							<Button
								onClick={() => handleCopy(password)}
								className='flex gap-2 items-center ml-8 text-white text-xl'
							>
								Copy to clipboard{' '}
								<img className='w-8 m-0' src='/clipboard.svg' alt='Copy to clipboard' />
							</Button>
						</li>
					))}
				</ul>
			</div>
			<Toast visible={toastVisible} msg='Password copied to clipboard!' />
		</section>
	)
}

export default PasswordGenerator
