import type React from 'react'
import './RangeInput.css'

type RangeInputProps={
	value: number
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function RangeInput({ value, handleChange }: RangeInputProps) {
	return <input type='range' max={32} min={4} value={value} onChange={handleChange} />
}
