import React from 'react'

const Button = (props) => {
	const { label, className, iconClass, handleClick } = props

	return (
		<>
			<button className={className} label={label} onClick={handleClick}>
				<i className={iconClass}></i> {label}
			</button>
		</>
	)
}

export default Button
