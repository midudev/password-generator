import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import copyClipboard from '../services/copyClipboard'
import { getPass } from '../services/getPass'
import './form.css'
export const Form = ({ setPass, pass }) => {
	const [passValues, handleInputChanges] = useForm({
		pass,
		lengthPass: 8,
		maxLength: 25
	})
	const { lengthPass, maxLength } = passValues

	useEffect(() => {
		if (pass === '') {
			setPass(getPass(lengthPass))
		}
	}, [lengthPass, pass, lengthPass])

	const handleClickNewPass = () => {
		setPass(getPass(lengthPass))
		console.log('click', passValues)
	}
	const handleCopy = () => {
		copyClipboard(pass)
	}
	const handleLengthPass = (e) => {
		const value = e.target.value
		handleInputChanges(e)
		setPass(getPass(value))
	}

	return (
		<section className='text-white'>
			<div>
				<label htmlFor='pass' className='block w-96 relative text-white'>
					<input
						type='text'
						id='pass'
						name='pass'
						value={pass}
						onChange={handleInputChanges}
						className='px-4 w-full font-mono py-4 rounded focus:outline-none  bg-[#3e3745] text-white focus:outline-violet-500'
					/>
					<button
						onClick={handleCopy}
						role='button'
						className='absolute right-14 block top-0 bottom-0 my-auto focus:outline-violet-500 p-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
							<path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
						</svg>
					</button>
					<button
						onClick={handleClickNewPass}
						role='button'
						className='absolute right-4 block top-0 bottom-0 my-auto active:rotate-[1turn] duration-200 transition-all focus:outline-violet-500 p-2'
					>
						<svg
							viewBox='0 0 16 16'
							className='h-5 w-5'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z' />
							<path
								fillRule='evenodd'
								d='M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z'
							/>
						</svg>
					</button>
				</label>
				<label htmlFor='long' className='mt-4 block'>
					<div className='flex items-center justify-between mb-2'>
						<span>Longitud</span>
						<span className='bg-[#3e3745] rounded-md w-9 h-9 grid place-content-center'>
							{lengthPass}
						</span>
					</div>
					<input
						className='input_eduardoguette w-full h-1 appearance-none focus:outline-violet-500 '
						onChange={handleLengthPass}
						type='range'
						name='lengthPass'
						id='long'
						min={1}
						value={lengthPass}
						max={maxLength}
					/>
				</label>
			</div>
		</section>
	)
}
