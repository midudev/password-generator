import React from 'react'

export const InputSection = ({ state: range, handler: getRange }) => {
	return (
		<div className='input-container'>
			<div className='label-container'>
				<label className='range-lbl' for='range'>
					Password length:
				</label>
				<span className='range-span'>{range}</span>
			</div>
			<input
				type='range'
				id='range'
				value={range}
				className='range-input'
				min='4'
				max='18'
				onChange={getRange}
			/>
		</div>
	)
}
