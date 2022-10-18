// @vendors
import React, { useState, useEffect, useMemo } from 'react'
// @components
import { CheckBox, Range, CopyIcon } from '../../Components'
// @utils
import randomPasswordGenerator from '../../Scripts/RPG'
// @config
import settingsKeys from '../../config/settingsKeys'
// @styles
import './Home.css'

// ─────────────── ∞ ───────────────

const defaultConfig = {
	[settingsKeys.LENGTH]: 25,
	[settingsKeys.LOWER_CASE]: true,
	[settingsKeys.UPPER_CASE]: true,
	[settingsKeys.NUMBERS]: true,
	[settingsKeys.SIMBOLS]: true,
	[settingsKeys.EMOJIS]: false
}

// ─────────────── ∞ ───────────────

export default function Page() {
	const [settings, setSettings] = useState(defaultConfig)
	const [randomPassword, setRandomPassword] = useState('')

	const allowDisable = useMemo(() => {
		const { length, ...charsConfig } = settings

		return Object.values(charsConfig).filter(Boolean).length === 1
	}, [settings])

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
			<div className='row-container'>
				<label>{randomPassword}</label>
				<div className='horizontal-separator' />
				<CopyIcon onClick={copyToClipboard} />
			</div>
			<div className='separator' />
			<Range
				name={settingsKeys.LENGTH}
				label='Password Length'
				min='4'
				max='50'
				value={settings[settingsKeys.LENGTH]}
				onChange={handleInputChange}
			/>
			<div className='separator' />
			<CheckBox
				name={settingsKeys.LOWER_CASE}
				label='Allow Lowercase (abc)'
				isChecked={settings[settingsKeys.LOWER_CASE]}
				onChange={handleInputChange}
				disabled={allowDisable && settings[settingsKeys.LOWER_CASE]}
			/>
			<CheckBox
				name={settingsKeys.UPPER_CASE}
				label='Allow Uppercase (ABC)'
				isChecked={settings[settingsKeys.UPPER_CASE]}
				onChange={handleInputChange}
				disabled={allowDisable && settings[settingsKeys.UPPER_CASE]}
			/>
			<CheckBox
				name={settingsKeys.NUMBERS}
				label='Allow Numbers (0-9)'
				isChecked={settings[settingsKeys.NUMBERS]}
				onChange={handleInputChange}
				disabled={allowDisable && settings[settingsKeys.NUMBERS]}
			/>
			<CheckBox
				name={settingsKeys.SIMBOLS}
				label='Allow Symbols (!@#$%^&*()+)'
				isChecked={settings[settingsKeys.SIMBOLS]}
				onChange={handleInputChange}
				disabled={allowDisable && settings[settingsKeys.SIMBOLS]}
			/>
			<CheckBox
				name={settingsKeys.EMOJIS}
				label='Allow Emojis (😎👌🏻👍🏻)'
				isChecked={settings[settingsKeys.EMOJIS]}
				onChange={handleInputChange}
				disabled={allowDisable && settings[settingsKeys.EMOJIS]}
			/>
			<div className='separator' />
			<button className='button' onClick={generatePassword}>
				GENERATE RANDOM PASSWORD
			</button>
		</div>
	)
}

/* <Text>RANDOM PASSWORD GENERATOR</Text>
			<Text>Create strong and secure passwords to keep your accounts safe</Text>
			<Text>fuerza de la contraseña</Text>
			<Text>Use the settings to specify parameters to improve your password security</Text>
			icono para ver tu contraseña

			meter tooltip avisando que emojis y simbolos no pueden ser aceptados por todos los gestiores
	*/
