import usePasswordGenerator from 'src/hooks/javierscode/usePasswordGenerator'
import InputRange from './RangeInput'
import SwitchInput from './SwitchInput'
import type { Options, OptionsMapper } from './types'
import './PasswordGenerator.css'
import CopyIcon from './CopyIcon'
import { useState } from 'react'

const sentenceOptionsMapper: OptionsMapper = {
	includeNumbers: 'Include numbers',
	includeLetters: 'Include letters',
	includeSymbols: 'Include symbols',
	includeUppercase: 'Include uppercase'
}

export default function PasswordGenerator() {
	const [showToast, setShowToast] = useState(false)
	const { password, generatePassword, length, handleLengthChange, settings, handleSettingsChange } =
		usePasswordGenerator()
	const options = Object.keys(settings) as Options[]

	const copyPasswordToClipboard = () => {
		navigator.clipboard.writeText(password)
		setShowToast(true)
		setTimeout(() => setShowToast(false), 5000)
	}

	return (
		<section className='generator'>
			<label htmlFor='password' className='generator-title'>
				Generated password
			</label>
			<div className='generator-password-wrapper'>
				<input type='text' id='password' value={password} readOnly className='generator-password' />
				<button onClick={copyPasswordToClipboard} disabled={password.length === 0}>
					<CopyIcon />
				</button>
				{showToast && <div className='generator-toast'>Copied</div>}
			</div>
			<p className='generator-title'>Lenght: {length}</p>
			<div className='generator-card'>
				{4}
				<InputRange value={length} handleChange={handleLengthChange} />
				{32}
			</div>
			<p className='generator-title'>Settings</p>
			{options.map((option) => (
				<div key={option} className='generator-card'>
					{sentenceOptionsMapper[option]}
					<SwitchInput
						name={option}
						checked={settings[option]}
						handleChange={handleSettingsChange}
					/>
				</div>
			))}
			<button className='generator-button' onClick={generatePassword}>
				Generate password
			</button>
		</section>
	)
}
