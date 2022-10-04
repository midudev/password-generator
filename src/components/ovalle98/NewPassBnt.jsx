import React from 'react'

const NewPassBnt = ({ handlePass }) => {
	return (
		<div className='column-center ptb'>
			<button className='button-75' onClick={handlePass}>
				<span className='text'>New Password</span>
			</button>
		</div>
	)
}

export default NewPassBnt