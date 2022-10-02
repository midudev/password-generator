import { React } from 'react'
import './style.css'

const Slider = ({ sliderValue, setSliderValue }) => {
	return (
		<>
			<div className='slider-container'>
				<span className='slider-range'>6</span>
				<input
					type='range'
					value={sliderValue}
					onChange={(e) => setSliderValue(+e.target.value)}
					className='slider slider-progress'
					min='6'
					max='20'
				/>
				<span className='slider-range'>20</span>
			</div>
		</>
	)
}

export default Slider
