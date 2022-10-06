import React from 'react'
import { Icon } from './Icon.jsx'

export const OutputSection = ({ response, save: saveToClipboard }) => {
	return (
		<div className='password-container'>
			<div className='container-pass'>
				<span className='password-response'>{response.password}</span>
				<button className='clipboard-button' onClick={saveToClipboard}>
					<Icon state={response.status} />
				</button>
			</div>
		</div>
	)
}
