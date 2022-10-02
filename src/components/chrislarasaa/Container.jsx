import { React } from 'react'
import './style.css'

const Container = ({ title, children }) => {
	return (
		<div className='container'>
			<h2 className='container-title uppercase font-special'>{title ?? 'Default Title'}</h2>
			{children}
		</div>
	)
}

export default Container