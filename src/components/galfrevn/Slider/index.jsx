import React from 'react'
import './styles.css'

function Slider({ name, value, changeGenerationParam }) {
	return (
		<input
			id={name}
			name={name}
			value={value}
			onChange={(e) => changeGenerationParam(name, e.target.value)}
			className='cursor rounded-lg appearance-none bg-white/20 h-1 w-full'
			type='range'
			min='8'
			step='1'
			max='20'
		/>
	)
}

export default Slider
