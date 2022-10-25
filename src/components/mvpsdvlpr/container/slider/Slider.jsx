import React, { useState, useRef } from 'react'

import '../../styles/Slider.css'

const Slider = (props) => {
	const { step, min, max, value, defaultLength, onChangeValue } = props

	const rangeRef = useRef()
	let [range, setRange] = useState()

	const activeRangeColor = '#4aa1f3'
	const rangeBackground = '#d7dcdf'

	const handleChange = (max) => (e) => {
		onChangeValue(e)
		const value = e.target.value
		setRange(value)
		const progress = (value / max) * 100 + '%'
		const newBackgroundStyle = `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`
		rangeRef.current.style.background = newBackgroundStyle
	}

	if (range !== defaultLength || !range) {
		range = defaultLength
	}

	const progressValue = range
	const progress = (progressValue / max) * 100 + '%'

	const styleInput = {
		background: `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`
	}

	return (
		<div className='slider-container'>
			<div className='slider'>
				<input
					ref={rangeRef}
					className='range-slider'
					type='range'
					step={step}
					min={min}
					max={max}
					value={value}
					onChange={handleChange(max)}
					style={styleInput}
				/>
				<span className='range-slider-value'>{progressValue}</span>
			</div>
		</div>
	)
}

export default Slider
