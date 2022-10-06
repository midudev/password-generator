import React from 'react'

export default function CheckboxLabeled({ label, checked, onChange }) {
	return (
		<label className='flex items-center'>
			<input
				type='checkbox'
				className='bg-slate-800 checked:before:bg-slate-800 before:bg-slate-800 accent-slate-800 focus:ring-1 focus:ring-gray-300 ring-1 ring-gray-300 checked:ring-1 checked:ring-gray-300 checked:ring-offset-1 checked:ring-offset-gray-800 text-green-400'
				checked={checked}
				onChange={onChange}
			/>
			<span className='ml-2'>{label}</span>
		</label>
	)
}
