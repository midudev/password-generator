import React from 'react'

const SliderRange = (props) => {
	const value = props.value
	return (
		<>
			<p>SliderRange</p>
			<div>
				<input type='range' min='6' max='20' value={props.value} onChange={({ target: { value: radius } }) => { props.setValue(radius) }}/>
				<div className='buble'>
					{value}
				</div>
			</div>
		</>
	)
}

export default SliderRange
