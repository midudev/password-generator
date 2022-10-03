import React from 'react'
import './styles/buttonStyle.css'

const ButtonComponent = ({ children, onClick }) => {
	return <button onClick={onClick}>{children}</button>
}

export default ButtonComponent
