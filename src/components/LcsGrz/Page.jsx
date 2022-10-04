// @vendors
import React, { useState, useEffect } from 'react'
// @utils
import randomPasswordGenerator from './Scripts/RPG'
// @assets
import CopyIcon from './CopyIcon'
// @styles
import './Page.css'

const defaultConfig = { length: 25 }

export default function Page() {
	const [settings, setSettings] = useState(defaultConfig)
	const [randomPassword, setRandomPassword] = useState('')

	const handleInputChange = ({ target }) => {
		const { type, checked, value, name } = target

		setSettings((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value
		}))
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(randomPassword)
	}

	const generatePassword = () => {
		setRandomPassword(randomPasswordGenerator(settings))
	}

	useEffect(generatePassword, [])

	return (
		<div className='container'>
			RANDOM PASSWORD GENERATOR
			<div className='separator' />
			<div className='rowContainer'>
				<label>{randomPassword}</label>
				<div className='horizontalSeparator' />
				<CopyIcon onClick={copyToClipboard} />
			</div>
			<div className='separator' />
			<label>Password Length: </label>
			<label className='rowContainer'>
				4
				<div className='horizontalSeparator' />
				<input
					name='length'
					type='range'
					min='4'
					max='50'
					value={settings.length}
					onChange={handleInputChange}
				/>
				<div className='horizontalSeparator' />
				50
			</label>
			<div className='separator' />
			<div className='separator' />
			<button className='button' onClick={generatePassword}>
				generate
			</button>
		</div>
	)
}
