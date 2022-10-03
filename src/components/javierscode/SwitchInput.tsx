import type React from 'react'
import './SwitchInput.css'

type SwitchInputProps = {
	name: string
	checked: boolean
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function SwitchInput({ name, checked, handleChange }: SwitchInputProps) {
	return (
		<label className='switch'>
			<input type='checkbox' name={name} checked={checked} onChange={handleChange} />
			<span className='switch-slider'></span>
		</label>
	)
}
