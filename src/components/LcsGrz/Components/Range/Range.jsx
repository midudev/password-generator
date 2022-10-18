// @vendors
import React from 'react'
// @styles
import './Range.css'

// ─────────────── ∞ ───────────────

export default function Range({ name, label, min, max, onChange, value }) {
	return (
		<div>
			<label>{label}</label>
			<label className='rowContainer'>
				{min}
				<div className='horizontalSeparator' />
				<input name={name} type='range' min={min} max={max} value={value} onChange={onChange} />
				<div className='horizontalSeparator' />
				{max}
			</label>
		</div>
	)
}
