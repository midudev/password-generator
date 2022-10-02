import React, { useEffect } from 'react'

import './Toast.css'

const Toast = ({ onFinish }) => {
	useEffect(() => {
		const timer1 = setTimeout(() => {
			onFinish()
		}, 2000)

		return () => clearTimeout(timer1)
	}, [])

	return (
		<div id='toast' className='show'>
			<div id='img'>
				✔️
			</div>
			<div id='desc'>
				Copied to clipboard!
			</div>
		</div>
	)
}
export default Toast
