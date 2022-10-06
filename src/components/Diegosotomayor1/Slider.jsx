import { useState } from 'react'
import './styles.css'
const SliderDigito = ({ digito, setDigito }) => {
	const ChangeDigito = e => {
		const val = e.target.value
		setDigito(val)
	}
	return (
		<div className='flex flex-col justify-center mt-2 '>
			<div className='flex gap-4'>
				<p className='text-white text-lg drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>DIGITOS:</p>
				<p className='text-white text-lg drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]'>{digito}</p>
			</div>
			<div className='relative max-w-[500px] inputRange'>
				<input
					type='range'
					className='w-full h-2 bg-[#B8B1C4] text-white rounded-lg range-sm appearance-none cursor-pointer dark:bg-gray-700 mt-5'
					min='8'
					max='30'
					onChange={ChangeDigito}
				/>
				<div className='flex'>
					<p className='text-white text-lg w-1/3 text-left'>8</p>
					<p className='text-white text-lg w-1/3 text-center'>19</p>
					<p className='text-white text-lg w-1/3 text-right'>30</p>
				</div>
			</div>
		</div>
	)
}
export default SliderDigito
