import { useState } from 'react'
import './Slider.css'

export const Slider = ({ min, max, setPasswordLength }) => {
	const [value, setValue] = useState(min)
	// eslint-disable-next-line eqeqeq
	const isEqualToMinOrMax = value == min || value == max

	const onSlideValueChange = ({ target }) => {
		const value = target.value

		setValue(value)
		setPasswordLength((curr) => ({
			...curr,
			passwordlength: value
		}))
	}

	return (
		<div className='mb-4'>
			<input
				aria-label='Password length'
				max={max}
				min={min}
				onChange={onSlideValueChange}
				type='range'
				value={value}
			/>
			<div className='flex justify-between'>
				<h6 className='text-lg font-bold'>{min}</h6>
				{!isEqualToMinOrMax && <h6 className='text-lg font-bold'>{value}</h6>}
				<h6 className='text-lg font-bold'>{max}</h6>
			</div>
		</div>
	)
}
