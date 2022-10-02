import { useRef, useState } from 'react'
import './style/style.css'
export const GeneratorContainer = ({ title }) => {
	const passwordRef = useRef(null)
	const rangeRef = useRef(null)
	const [range, setRange] = useState(8)

	function handleRangeOnChange (event) {
		setRange(event.target.value)
	}

	function handleButtonOnClick () {
		console.log(range)
	}
	return (
		<div className='generator-container'>
			<h1 className='title'>{title}</h1>
			<input type='text' placeholder='Your password here' ref={passwordRef}></input>
			<input type='range' min='5' max='20' defaultValue='8' step='1' ref={rangeRef} onChange={(e) => handleRangeOnChange(e)}></input>
			<button type='button' className='button' onClick={handleButtonOnClick}>Generate</button>
		</div>
	)
}
