import React from 'react'

const Toggle = ({ checked, onChange, label, id, name }) => {
	return (
		<div className='flex items-center justify-between'>
			<label htmlFor={id}>{label}</label>
			<input
				className='toggle'
				type='checkbox'
				id={id}
				name={name}
				checked={checked}
				onChange={onChange}
			/>
		</div>
	)
}

export default Toggle
