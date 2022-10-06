import { useState } from 'react'
import '../styles/Slider.css'

const Slider = ({ handleChange }) => {
	const [value, setValue] = useState(6)

	const sliderHandleChange = (number) => {
		handleChange(number)
		setValue(() => number)
	}

	return (
		<section className='flex flex-col justify-around items-center w-full sm:w-96 mt-5'>
			<label htmlFor='range-password' className='text-white italic'>
				Select password length:
			</label>
			<input
				className='my-5'
				id='range-password'
				type='range'
				defaultValue='6'
				min='6'
				max='25'
				onChange={(evt) => sliderHandleChange(evt.target.value)}
			/>
			<span className='w-12 bg-black text-white border border-white rounded text-center p-2'>
				{value}
			</span>
		</section>
	)
}

export default Slider
