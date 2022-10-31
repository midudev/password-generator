// @vendors
import React from 'react'
// @components
import Divider from '../Divider/Divider'
// @styles
import './Range.css'

// ─────────────── ∞ ───────────────

export default function Range({ name, label, min, max, onChange, value }) {
	return (
		<div className='lg-r-container'>
			<label>{label}</label>
			<Divider width={24} />
			<input
				className='lg-range'
				name={name}
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
			<Divider width={24} />
			<label>{value}</label>
		</div>
	)
}
