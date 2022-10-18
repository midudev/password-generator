// @vendors
import React from 'react'
// @styles
import './CheckBox.css'

// ─────────────── ∞ ───────────────

export default function CheckBox({ name, label, onChange, isChecked, disabled }) {
	return (
		<label>
			<input
				name={name}
				type='checkbox'
				checked={isChecked}
				onChange={onChange}
				disabled={disabled}
			/>
			{label}
		</label>
	)
}
