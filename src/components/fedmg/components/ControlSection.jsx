import React from 'react'

export const ControlSection = ({ response, handler: generatePass }) => {
	return (
		<div className='button-container'>
			<div className='message-container'>
				<span className='response-message'>{response}</span>
			</div>
			<button className='generate-button' onClick={generatePass}>
				Generate
			</button>
		</div>
	)
}
