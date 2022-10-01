import React, { useRef } from 'react'
import './style.css'

const Slider = ({ value, onChange, className }) => {
	const slider = useRef(null)

	const handleSlider = (event) => {
		sliderBg()
		onChange(event)
	}
	
	const sliderBg = () => {
		const value = slider.current.value
		const min = slider.current.min
		const max = slider.current.max
		const percent = ((value - min) / (max - min)) * 100
		slider.current.style.background = `linear-gradient(to right, #536976 ${percent}%, rgba(255,255,255,.7) ${percent}%, rgba(255,255,255,.7) 100%)`
	}

	return (
		<div className={className}>
			<div className='flex justify-center items-center gap-3'>
				<div className='slider-value'>
					{value}
				</div>
				<input ref={slider} className="slider" type="range" name="volume" min="8" max="16" value={value} onChange={handleSlider} />
			</div>
		</div>
	)
}

export default Slider