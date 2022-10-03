import React from 'react'

function Checkbox(props) {
	const { value, onChange } = props

	return (
		<div>
			<input type='checkbox' checked={value} onChange={onChange} />
		</div>
	)
}

export default Checkbox
