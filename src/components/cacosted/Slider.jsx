import React from 'react'

export const Slider = ({action, value, min = 5, max = 100}) => {
	return (
		<>
			<input 
				onChange={action} 
				type="range"
				className="w-full bg-transparent accent-white" 
				name="password-length" 
				id="password-length" 
				min={min} 
				max={max} 
				value={value.length}
			/>
			<span className="rounded-xl bg-slate-800 px-4 py-2">{value.length}</span>
		</>
	)
}