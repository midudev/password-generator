import React, { useState } from 'react'
import './styles/generator.css'

const PasswordGenerator = () => {
	const [range, setRange] = useState(10)

	const getRange = (e) => {
		setRange(e.target.value)
	}

	return (
		<main className='fedmg-main'>
			<div className='form'>
				<h2>Password Generator</h2>
				<input type='range' className='input-range' min='4' max='100' onChange={getRange} />
				<label>{range}</label>
			</div>
		</main>
	)
}

export default PasswordGenerator
