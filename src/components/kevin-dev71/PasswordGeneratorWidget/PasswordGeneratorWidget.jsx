// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react'

// SERVICES
import { generatePassword } from './service/passwordGenerator.service'
import CopyIcon from './CopyIcon/CopyIcon'

// CONSTANTS
import { CONFIG } from './config/constants'

// STYLES
import './PasswordGeneratorWidget.css'
import Toast from './Toast/Toast'

const PasswordGeneratorWidget = () => {
	const { SLIDER_MIN_VALUE, SLIDER_MAX_VALUE, SLIDER_STEP_VALUE } = CONFIG
	const [passwordLength, setPasswordLength] = useState(SLIDER_MIN_VALUE)
	const [generatedPassword, setGeneratedPassword] = useState(generatePassword(passwordLength))
	const [sliderThumbLeftMarginValue, setSliderThumbLeftMarginValue] = useState(0)
	const [showToast, setShowToast] = useState(false)

	useEffect(() => {
		const calculateLeftMarginOfSliderValue = () => {
			setSliderThumbLeftMarginValue(
				((passwordLength - SLIDER_MIN_VALUE) * 100) / (SLIDER_MAX_VALUE - SLIDER_MIN_VALUE)
			)
		}

		calculateLeftMarginOfSliderValue()
	}, [passwordLength, SLIDER_MAX_VALUE, SLIDER_MIN_VALUE])

	const handlePasswordLength = (event) => setPasswordLength(event.target.value)

	const handlePasswordGeneration = (passwordLength) => () => {
		const newPassword = generatePassword(Number(passwordLength))
		setGeneratedPassword(newPassword)
	}

	const handleCopy = (password) => () => {
		navigator.clipboard.writeText(password)
		setShowToast(true)
	}

	const handleShowToast = (hide) => () => setShowToast(hide)

	return (
		<section className='card'>
			<h1 className='text-xl capitalize font-bold'>Password Generator</h1>
			<h3>Password length</h3>
			<div className='slider-wrapper'>
				<input
					className='slider-wrapper__input'
					type='range'
					value={passwordLength}
					min={SLIDER_MIN_VALUE}
					max={SLIDER_MAX_VALUE}
					step={SLIDER_STEP_VALUE}
					onChange={handlePasswordLength}
				/>
				<div
					className='slider-wrapper__value'
					style={{ '--left': `${sliderThumbLeftMarginValue}%` }}
				>
					{passwordLength}
				</div>
			</div>
			<div className='password-field'>
				{generatedPassword}
				<CopyIcon onClick={handleCopy(generatedPassword)} />
			</div>
			<button className='card__btn' onClick={handlePasswordGeneration(passwordLength)}>
				Generate
			</button>
			{showToast && <Toast onFinish={handleShowToast(false)} />}
		</section>
	)
}
export default PasswordGeneratorWidget
