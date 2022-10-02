import React from 'react'

const Check = ({ text }) => {
	return (
		<div>
			<input type='checkbox' defaultChecked />
			<label>{text}</label>
		</div>
	)
}

export default Check
