import React from 'react'

export const Slider = ({ value, onChange, min, max }) => {
	return (
		<div className='agutierrezr__slider'>
			<div className='agutierrezr__slider__value--left'>{min}</div>
			<input
				type='range'
				className='agutierrezr__slider-field'
				id='length'
				name='length'
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			<div className='agutierrezr__slider__value--right'>{max}</div>
		</div>
	)
}
