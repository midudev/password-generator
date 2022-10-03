import { useState } from 'react'

import './style.css'
import Slider from './Slider'
import Copy from './svg/Copy'
import Info from './svg/Info'
import Ok from './svg/Ok'

const KeyGenerator = ({ min = 6, max = 18 }) => {
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

	const handleSlider = (event) => {
		setRangeValue(event.target.value)
	}

	return (
		<div className='flex flex-wrap m-auto text-center w-full  sm:w-1/2 lg:w-1/3 bg-[#DCEDC8] shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4'>
			<div className='w-full h-12'>
				<p className='text-sm text-gray-600 flex items-center'>
					<Info fill='none' />
					&nbsp;Seleccione el tanaño de la clave que desea generar
				</p>
			</div>

			<div className='w-full h-12'>
				<Slider min={min} max={max} value={rangeValue} onChange={handleSlider} />
			</div>

			<div className='w-full h-12'>
				<button
					type='submit'
					onClick={handlerClick}
					className='bg-[#3CB371] hover:bg-[#2E8B57] active:bg-[#255557] focus:outline-none text-white font-bold py-2 px-4 rounded-full'
				>
					Generar Clave
				</button>
			</div>

			<div className='flex w-5/6 '>
				<span
					onClick={handlerCopy}
					className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 hover:bg-gray-300 active:bg-gray-500 cursor-pointer rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'
				>
					<Copy fill='none' />
				</span>
				<input
					type='text'
					id='website-admin'
					className='rounded-none font-bold rounded-r-lg bg-gray-50 border text-gray-500 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
					placeholder='Clave generada'
					readOnly
					value={password}
				/>
			</div>
			<div className='flex w-1/6'>
				<div className='inline-flex items-center px-3'>{isCopied ? <Ok fill='none' /> : ''}</div>
			</div>
		</div>
	)
}

export default KeyGenerator
