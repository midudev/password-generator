import { useState } from 'react'
import './KeyGenerator.css'

const PassCreator = ({ min = 6, max = 18 }) => {
	const currentValue = (min + max) / 2
	const [rangeValue, setRangeValue] = useState(currentValue)
	const [password, setPassword] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const handlerClick = (e) => {
		e.preventDefault()
		const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?'
		let generatePassword = ''
		for (let i = 0; i < rangeValue; i++) {
			generatePassword += characters.charAt(Math.floor(Math.random() * characters.length))
		}
		setPassword(generatePassword)
		setIsCopied(false)
	}
	const handlerCopy = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			setIsCopied(true)
		}
	}
	return (
		<div className='flex flex-wrap bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
			<div className='w-full h-12'>
				<p className='text-sm text-gray-600 flex items-center'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						></path>
					</svg>
					&nbsp;Seleccione el tanaño de la clave que desea generar
				</p>
			</div>
			<div className='w-full h-12'>
				<input
					type='range'
					min={min}
					max={max}
					value={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
				/>
				<span>
					&nbsp;{rangeValue} <small>Caracteres</small>
				</span>
			</div>

			<div className='w-full h-12'>
				<button
					type='submit'
					onClick={handlerClick}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
				>
					Generar Clave
				</button>
			</div>

			<div className='flex w-5/6 '>
				<span
					id='copybtn'
					onClick={handlerCopy}
					className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
				>
					<svg
						className='w-6 h-6'
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
				</span>
				<input
					type='text'
					id='website-admin'
					className='rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='generated password'
					readOnly
					value={password}
				/>
			</div>
			<div className='flex w-1/6 '>
				<p className='text-sm text-gray-600 flex items-center'>
					<svg
						style={{ display: isCopied ? 'block' : 'none' }}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
					</svg>
					<small>{isCopied ? 'Copiado!' : ''}</small>
				</p>
			</div>
		</div>
	)
}

export default PassCreator
