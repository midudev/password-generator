import React from 'react'
import './style.css'

const Button = ({ children, onClick }) => (
	<button className='button' onClick={onClick} type='button'>
		{children}
	</button>
)

export default Button
