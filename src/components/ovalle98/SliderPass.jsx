import React from 'react'

const SliderPass = ({ MIN, MAX, range, setRange }) => {
	return (
		<div className='row pt-10'>
			<p>{MIN}</p>
			<input type='range'
				min={MIN}
				max={MAX}
				step={1}
				value={range}
				className='slider'
				onChange={(e) => setRange(e.target.value)}
			/>
			<p>{MAX}</p>
		</div>
	)
}

export default SliderPass