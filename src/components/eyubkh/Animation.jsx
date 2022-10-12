import { useState } from 'react'
import './style/castle.css'
import { Castle } from './svg/Castle'
import { Tower } from './svg/Tower'
import { Wall } from './svg/Wall'

export const Animation = () => {
	const [show, setShow] = useState(false)
	const handlerToggle = () => {
		const svg = window.document.getElementById('svgtest')
		console.log(svg.style.animation)
	}
	return (
		<div id='divtest'>
			<button onClick={handlerToggle}>toggle</button>
			<Tower id='tower' />
			<Tower id='tower2' />
			<Castle id='castle' />
			<Wall id='wall' />
		</div>
	)
}
