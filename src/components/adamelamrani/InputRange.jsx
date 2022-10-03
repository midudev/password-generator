import React from 'react'
const InputRange = ({ inputRange, setRange }) => {
	return (
		<div className='input-range-box'>
			<p>6</p>
			<input
				type='range'
				min={6}
				max={30}
				step={1}
				value={inputRange}
				onChange={(e) => setRange(e.target.value)}
			/>
			<p>30</p>
		</div>
	)
}

export default InputRange
