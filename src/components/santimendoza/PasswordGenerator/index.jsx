import React from 'react'
import './PasswordGenerator.css'

function PasswordGenerator() {
	const [passwordLength, setPasswordLength] = React.useState(8)
	const [password, setPassword] = React.useState('')
	const [allowSpecialChars, setAllowSpecialChars] = React.useState(false)
	const [isCopied, setIsCopied] = React.useState(false)

	const generatePassword = () => {
		let newPassword = ''

		let availableChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz1234567890'

		if (allowSpecialChars) {
			availableChars += '!"·$%&/()=?¿-.,;:_'
		}

		for (let i = 0; i < passwordLength; i++) {
			newPassword += availableChars[Math.floor(Math.random() * (availableChars.length))]
		}

		setPassword(newPassword)
	}

	const handleCopyPassword = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 500)
	}

	return (
		<div className='app-container'>
			<h1 className='app-container-title'>Password Generator</h1>
			<label htmlFor='password-length-slider'>Password Length: {passwordLength}</label>
			<input
				type='range'
				min='1'
				max='30'
				id='password-length-slider'
				value={passwordLength}
				onChange={(e) => setPasswordLength(e.target.value)}
			/>
			<label htmlFor='special-chars-check'>
				<input
					className='special-chars-checkbox'
					type='checkbox'
					checked={allowSpecialChars}
					onChange={() => setAllowSpecialChars(prevValue => !prevValue)}
				/>
				Allow Special Chars
			</label>
			<button className='generate-button' onClick={generatePassword}>Generate</button>
			{password &&
				<div className='password-generated'>
					<input className='password-input' type='text' disabled value={password} />
					<button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={handleCopyPassword}>📝 {isCopied ? 'Copied' : 'Copy'}</button>
				</div>
			}
		</div>
	)
}

export default PasswordGenerator
