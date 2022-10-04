import React from 'react'
import CopyIcon from './CopyIcon'
import './style.css'

export default function Password({ password }) {
	const handleCopy = () => {
		navigator.clipboard.writeText(password)
	}
	return (
		<div className='passwordBlock'>
			<output className='password'>{password}</output>
			<CopyIcon onClick={handleCopy} className='copyBtn' />
		</div>
	)
}
