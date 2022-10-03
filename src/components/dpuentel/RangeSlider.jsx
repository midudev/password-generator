import React from 'react'

export default function RangeSlider({ min, max, value, onChange }) {
	return (
		<input
			type='range'
			onChange={onChange}
			value={value}
			min={min}
			max={max}
			className='
				form-range
				appearance-none
				w-full
				h-1
				bg-slate-900
				focus:outline-none focus:ring-0 focus:shadow-none
			'
		/>
	)
}
