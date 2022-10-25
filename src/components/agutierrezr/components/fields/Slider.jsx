import React from 'react'

export const Slider = ({ value, onChange, min, max }) => {
	return (
		<div className='slider'>
			<div className='slider__value--left'>{min}</div>
			<input
				type='range'
				className='slider-field'
				id='length'
				name='length'
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			<div className='slider__value--right'>{max}</div>
		</div>
	)
}
