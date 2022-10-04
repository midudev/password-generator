import React from 'react'
import CopyPassBtn from './CopyPassbtn'
const ShowPass = ({ password, copiedPass }) => {
	return (
		<div className='pg-pass'>
			<span className='pass'>{password}</span>
			<CopyPassBtn copiedPass={copiedPass}/>
		</div>
	)
}

export default ShowPass