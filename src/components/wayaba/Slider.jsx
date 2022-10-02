import React from 'react'

const Slider = ({ value, min, max, onChange }) => {
	const handleOnChange = (event) => {
		onChange(event)
	}
	return (
		<div className='flex justify-center items-center gap-3'>
			<input
				className='my-4 accent-[#3CB371]'
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={handleOnChange}
			/>
			<div className='w-12 rounded-lg bg-[#3CB371] text-white text-center font-bold leading-3 px-1 py-3'>
				{value}
			</div>
		</div>
	)
}

export default Slider
