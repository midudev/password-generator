import { useRef, useState } from 'react'
import './style/style.css'
export const GeneratorContainer = ({ title }) => {
	const passwordRef = useRef(null)
	const [range, setRange] = useState(8)
	const [message, setMessage] = useState('')
	const [disabled, setDisabled] = useState(true)

	function handleRangeOnChange (event) {
		setRange(event.target.value)
	}

	function handleButtonOnClick () {
		let password = ''
		const values = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const array = new Uint32Array(range)
		window.crypto.getRandomValues(array)

		for (let i = 0; i < range; i++) {
			password += values[array[i] % values.length]
		}
		passwordRef.current.value = password
		setDisabled(false)
	}

	function handleCopyEvent () {
		navigator.clipboard.writeText(passwordRef.current.value)
			.then(_ => setAlert('Copied successfully!'))
	}

	function setAlert (message) {
		setMessage(message)
		setTimeout(() => {
			setMessage('')
		}, 1500)
	}

	return (
		<div className='generator-container'>
			<h1 className='title'>{title}</h1>
			<div className='password-container'>
				<input type='text' placeholder='Your password will appear here' disabled='disabled' ref={passwordRef}></input>
				<button type='button' className={disabled ? 'disabled-copy-button' : 'copy-button'} onClick={() => handleCopyEvent()} disabled={disabled}>
					<img src='/nujovich/copy-icon.svg'></img>
				</button>
			</div>
			{message && <span className='message'>{message}</span>}
			<div className='slider'>
				<span className='range'>{range}</span>
				<input type='range' min='5' max='20' defaultValue='8' step='1' onChange={(e) => handleRangeOnChange(e)}></input>
			</div>
			<button type='button' className='generate-button' onClick={() => handleButtonOnClick()}>Generate</button>
		</div>
	)
}
