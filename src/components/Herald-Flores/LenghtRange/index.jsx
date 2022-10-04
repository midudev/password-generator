import React, { useState } from 'react'

const LengthRange = () => {
	const [Length, setLength] = useState(10)

	const handleRangeChange = (event) => {
		const target = event.target
		setLength(target.value)
	}

	return (
		<div className='mb-2'>
			<div className='flex justify-between'>
				<p className='block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>
					Password Length
				</p>
				<p className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>{Length}</p>
			</div>

			<input
				className='w-full'
				id='rangeBar'
				onChange={handleRangeChange}
				value={Length}
				type='range'
				min='6'
				max='30'
				step='1'
			/>
		</div>
	)
}

export default LengthRange
