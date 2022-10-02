import React from 'react'

import './CopyIcon.css'

const CopyIcon = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<span className='layer1'>
			📄<span className='layer2'>📄</span>
			</span>
		</button>
	)
}
export default CopyIcon
