import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context'
import { useForm } from '../hooks/useForm'
import copyClipboard from '../services/copyClipboard'
import { getPass } from '../services/getPass'
import './form.css'

export const Form = () => {
	const { state, setState } = useContext(AppContext)
	const [isCopied, setIsCopied] = useState(false)
	const { password } = state
	const [passValues, handleInputChanges] = useForm({
		lengthPass: 14,
		maxLength: 25,
		uppercase: false,
		lowercase: true,
		numbers: true,
		symbols: false
	})
	const { lengthPass, maxLength, uppercase, lowercase, numbers, symbols } = passValues

	useEffect(() => {
		if (password === '') {
			const password = getPass(passValues)
			setState((p) => ({
				...p,
				password
			}))
		}
	}, [password])

	const handleClickNewPass = () => {
		const password = getPass(passValues)
		setState((p) => ({
			...p,
			password
		}))
	}

	const handleCopy = () => {
		setIsCopied(true)
		setTimeout(() => {
			copyClipboard(password)
			setIsCopied(false)
		}, 500)
	}
	const handleLengthPass = (e) => {
		e.target.checked = passValues[e.target.name]
		handleInputChanges(e)
		const password = getPass(passValues)
		setState((p) => ({
			...p,
			password
		}))
	}

	const handleInputCheckboxChange = ({ target }) => {
		const value = target.checked
		passValues[target.name] = value
		console.log(passValues)
	}

	const handleColor = () =>
		lengthPass < 10
			? 'bg-red-400'
			: lengthPass >= 10 && lengthPass < 14
				? 'bg-orange-400'
				: 'bg-green-400'

	return (
		<section className='text-white font-mono w-[min(470px,100%)] mx-auto'>
			<label htmlFor='pass' className='block w-full relative text-white mb-8'>
				<div className='px-6 w-full font-mono py-4 rounded focus:outline-none text-lg md:text-2xl h-[64px] bg-[rgb(36,35,44)] text-[#8e7f9f] eg_input'>
					{password}
				</div>
				<div
					className={`${handleColor()} h-1 w-full absolute -bottom-0 z-10 rounded-bl rounded-br`}
				></div>
				{!isCopied
					? (
						<button
							onClick={handleCopy}
							role='button'
							title='Copy'
							className='absolute right-3 block top-0 bottom-0 my-auto focus:outline-none hover:bg-[rgb(8,7,11)] focus:text-black h-max w-max p-3 rounded-full '
						>
							<svg
								width='22px'
								height='22px'
								strokeWidth='1.5'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								color='#ffffff'
							>
								<path
									d='M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z'
									stroke='#ffffff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
								<path
									d='M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9'
									stroke='#ffffff'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
						</button>
					)
					: (
						<span className='absolute top-6 text-xs right-3 bottom-0 my-auto'>Copied!</span>
					)}
			</label>
			<div className='px-6 py-8 bg-[rgb(36,35,44)] '>
				<label htmlFor='uppercase' className='flex items-center justify-between'>
					<p className='text-sm md:text-base'>Include Uppercase Letters </p>
					<input
						className='border scale-150 eg_input'
						onChange={handleInputCheckboxChange}
						type='checkbox'
						name='uppercase'
						id='uppercase'
						value={uppercase}
					/>
				</label>
				<label htmlFor='lowercase' className='mt-4 flex items-center justify-between'>
					<p className='text-sm md:text-base'>Include Lowercase Letters</p>
					<input
						className='border scale-150 eg_input'
						onChange={handleInputCheckboxChange}
						type='checkbox'
						name='lowercase'
						id='lowercase'
						defaultChecked='on'
						value={lowercase}
					/>
				</label>
				<label htmlFor='numbers' className='mt-4 flex items-center justify-between'>
					<p className='text-sm md:text-base'>Include Numbers</p>
					<input
						className='border scale-150 eg_input'
						onChange={handleInputCheckboxChange}
						type='checkbox'
						name='numbers'
						id='numbers'
						defaultChecked='on'
						value={numbers}
					/>
				</label>
				<label htmlFor='uppercase' className='mt-4 flex items-center justify-between'>
					<p className='text-sm md:text-base'>Include Symbols</p>
					<input
						className='border scale-150 eg_input'
						onChange={handleInputCheckboxChange}
						type='checkbox'
						name='symbols'
						id='symbols'
						value={symbols}
					/>
				</label>
				<label htmlFor='long' className='mt-4 block'>
					<div className='flex items-center justify-between mb-2'>
						<span className='text-sm md:text-base'>Password Length</span>
						<span className='md:text-2xl rounded-md text-[rgb(164,255,175)]'>{lengthPass}</span>
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
				<button
					onClick={handleClickNewPass}
					role='button'
					className='w-full rounded-md flex justify-center items-center btn-clip-eg text-md my-auto focus:outline-none bg-gradient-to-r from-[rgb(255,215,77)] via-[rgb(64,221,255)] to-[rgb(124,127,255)] hover:bg-gradient-to-r  tracking-widest drop-shadow-eg p-3 text-black mt-8 hover:rotate-3 transition-all relative group'
				>
					GENERATE
					<div className='clip-btn-eg opacity-10 group-hover:opacity-100 left-0 group-hover:left-12 transition-all duration-700 h-16 w-20 absolute bg-gradient-to-l to-[#ffffff24] from-[#ffffff5e] drop-shadow'/>
				</button>
			</div>
		</section>
	)
}
