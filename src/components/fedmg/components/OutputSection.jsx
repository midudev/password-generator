import React from 'react'

export const OutputSection = ({ response, save: saveToClipboard }) => {
	return (
		<div className='password-container'>
			<div className='container-pass'>
				<span className='password-response'>{response.password}</span>
			</div>
			<button className='clipboard-button' onClick={saveToClipboard}>
				{response.status ? 'Copied' : 'Copy'}
			</button>
		</div>
	)
}
