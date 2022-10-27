import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context'
import { useForm } from '../hooks/useForm'
import { getPass } from '../services/getPass'
import { ButtonCopy } from './ButtonCopy'
import './form.css'
import { InputCheckbox } from './InputCheckbox'

export const Form = () => {
	const { state, setState } = useContext(AppContext)
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

	const handleLengthPass = (e) => {
		e.target.checked = passValues[e.target.name]
		handleInputChanges(e)
	}

	const handleColor = () =>
		lengthPass < 10
			? '-red-400'
			: lengthPass >= 10 && lengthPass < 14
				? '-orange-400'
				: '-green-400'

	return (
		<section className='text-white font-mono w-[min(470px,100%)] mx-auto'>
			<label htmlFor='pass' className='block w-full relative text-white mb-8'>
				<div className='px-6 w-full font-mono py-4 rounded focus:outline-none text-lg md:text-2xl h-[64px] bg-[rgb(36,35,44)] text-[#8e7f9f] eg_input'>
					{password}
				</div>
				<div
					className={`bg${handleColor()} h-1 w-full absolute -bottom-0 z-10 rounded-bl rounded-br`}
				></div>
				<ButtonCopy valueCopy={password} />
			</label>
			<div className='px-6 py-8 bg-[rgb(36,35,44)] flex gap-4 flex-col'>
				<InputCheckbox
					labelText={'Include Uppercase Letters'}
					name='uppercase'
					value={uppercase}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Lowercase Letters'}
					name='lowercase'
					value={lowercase}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Numbers'}
					name='numbers'
					value={numbers}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Symbols'}
					name='symbols'
					value={symbols}
					valuesForm={passValues}
				/>

				<label htmlFor='long' className='block'>
					<div className='flex items-center justify-between mb-2'>
						<span className='text-sm md:text-base'>Password Length</span>
						<span className={`md:text-2xl rounded-md text${handleColor()}`}>{lengthPass}</span>
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
					className='w-full rounded-md flex justify-center items-center btn-clip-eg text-md my-auto focus:outline-none bg-gradient-to-r from-[rgb(255,215,77)] via-[rgb(64,221,255)] to-[rgb(124,127,255)] md:hover:bg-gradient-to-r active:bg-gradient-to-r  tracking-widest drop-shadow-eg p-3 text-black mt-8 md:hover:rotate-3 active:rotate-3 transition-all relative group'
				>
					GENERATE
					<div className='clip-btn-eg opacity-10 group-active:opacity-10 md:group-hover:opacity-100 left-0 md:group-hover:left-12 md:group-active:left-12 transition-all duration-700 h-16 w-20 absolute bg-gradient-to-l to-[rgb(255,215,77,.1)] from-[#ffffff5e] drop-shadow' />
				</button>
			</div>
		</section>
	)
}
