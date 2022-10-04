import React, { useState, useEffect } from 'react'

import InputRange from './InputRange'
import Toaster from './toaster'

import ListIcon from './icons/ListIcon'
import SaveIcon from './icons/SaveIcon'
import CopyIcon from './icons/CopyIcon'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

import { generatePassword, getPasswordLevel } from './utils'
import { PASSWORD_MIN, PASSWORD_MAX, INPUT_STEPS, OPTIONS } from './constants'
import './App.css'

export default function App() {
	const [passwordlength, setPasswordLength] = useState(PASSWORD_MIN)
	const [password, setPassword] = useState('')
	const [passwordLevel, setPasswordLevel] = useState('')
	const [checkboxes, setCheckboxes] = useState(OPTIONS)
	const [toasts, setToasts] = useState([])

	const handleCheckboxChange = (evt, id) => {
		const changes = checkboxes.map((obj) => {
			if (obj.id === id) {
				return { ...obj, status: evt.target.checked }
			}
			return obj
		})
		setCheckboxes(changes)
	}

	const handleGeneratePassword = () => {
		const characters = checkboxes.reduce((acc, obj) => {
			if (obj.status) {
				acc = acc.concat(obj.characters)
			}
			return acc
		}, [])
		if (!characters.length) {
			addToast({
				message: 'You must select at least one option!',
				duration: 4
			})
			return
		}
		const newPassword = generatePassword(passwordlength, characters)
		setPassword(newPassword)
	}

	const handleCopy = () => {
		if (password) {
			navigator.clipboard.writeText(password)
			addToast({
				message: 'Copied to Clipboard!',
				duration: 2
			})
		}
	}

	const handleSave = () => {
		if (password) {
			addToast({
				message: 'Password Saved!',
				duration: 2
			})
		}
	}

	const addToast = (payload) => {
		const id = Date.now()

		const newToast = {
			id,
			...payload,
			onClose: () => setToasts((state) => state.filter((obj) => obj.id !== id))
		}

		setToasts((state) => [newToast, ...state])
	}

	useEffect(() => {
		if (password) {
			const level = getPasswordLevel(password)
			setPasswordLevel(level)
		}
	}, [password])

	return (
		<main className='david-fb__main'>
			<div className='david-fb__main-bg-effect'>
				<Toaster toasts={toasts} />
				<a className='david-fb__main__back' href='/'>
					<ArrowLeft /> Back to home
				</a>
				<h1 className='david-fb__title'>Password Generator</h1>
				<article className='david-fb__container'>
					<section>
						<header className='david-fb__password'>
							<hgroup>
								<div className='david-fb__password-input'>
									<input
										type='text'
										id='PasswordInput'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
									<button
										className='david-fb__hide-mobile'
										title='Copy Password'
										onClick={handleCopy}
									>
										<CopyIcon />
									</button>
								</div>
								<button
									className='david-fb__hide-mobile'
									onClick={handleSave}
									title='Save Password'
								>
									<SaveIcon />
								</button>
								<div className='david-fb__mobile-copy'>
									<button title='Copy Password' onClick={handleCopy}>
										<CopyIcon />
									</button>
									<button onClick={handleSave} title='Save Password'>
										<SaveIcon />
									</button>
								</div>
							</hgroup>
							<p>{passwordLevel}</p>
						</header>

						<InputRange
							min={PASSWORD_MIN}
							max={PASSWORD_MAX}
							steps={INPUT_STEPS}
							value={passwordlength}
							handleValueChange={setPasswordLength}
						/>

						<section className='david-fb__checkboxes'>
							{checkboxes.map((cb) => (
								<label className='david-fb__customCheckbox' key={cb.id}>
									<input
										type='checkbox'
										checked={cb.status}
										onChange={(evt) => handleCheckboxChange(evt, cb.id)}
									/>
									<span className='david-fb__checkmark'></span>
									<span>{cb.title}</span>
								</label>
							))}
						</section>
					</section>

					<section className='david-fb__control'>
						<button className='david-fb__generate' onClick={handleGeneratePassword}>
							Generate <ArrowRight />
						</button>
						<button className='david-fb__password-list'>
							<ListIcon />
						</button>
					</section>
				</article>
			</div>
		</main>
	)
}
