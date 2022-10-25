import React, { useReducer, useState } from 'react'

import { colorPassword, generatePassword } from '../helpers/'
import { copyToClipboard } from '../utils'
import { passwordReducer } from '../reducers/passwordReducer'

import { CopyIcon, RefreshIcon } from './icons'
import { Slider, Toggle } from './fields'

const initialConfig = { lower: true, length: 10 }
const firstPassword = generatePassword(initialConfig)

const PasswordGenerator = () => {
	const [config, dispatch] = useReducer(passwordReducer, initialConfig)
	const [password, setPassword] = useState(firstPassword)
	const [showMessage, setShowMessage] = useState(false)
	const [showHistory, setShowHistory] = useState(false)
	const [history, setHistory] = useState([firstPassword])

	const handleSubmit = (e) => {
		e.preventDefault()
		const passwordGenerated = generatePassword(config)

		setPassword(passwordGenerated)
		setHistory([passwordGenerated, ...history])
	}

	const handleCopyPass = () => {
		copyToClipboard(password)
		setShowMessage(true)
		setTimeout(() => {
			setShowMessage(false)
		}, 2500)
	}

	return (
		<div id='agutierrezr' className='site'>
			<div className='app-container'>
				<div className='app-main'>
					{!showHistory && (
						<form onSubmit={handleSubmit}>
							<section className='section section--password'>
								<div className='label'>Generated Password</div>
								<div className='box box--password'>
									<div
										className='password'
										dangerouslySetInnerHTML={{ __html: colorPassword(password) }}
									/>
									<div className='controls'>
										<button type='submit'>
											<RefreshIcon />
										</button>
										<button type='button' onClick={handleCopyPass}>
											<CopyIcon />
										</button>
									</div>
								</div>
								{showMessage && <span className='copy-message'>Password copied!!!</span>}
							</section>
							<section className='section'>
								<div className='label'>Length: {config.length}</div>
								<div className='box'>
									<Slider
										value={config.length}
										onChange={({ target }) => dispatch({ type: 'length', payload: target.value })}
										min={5}
										max={128}
									/>
								</div>
							</section>
							<section className='section'>
								<div className='label'>Settings</div>
								<div className='generator-settings'>
									<div className='box'>
										<Toggle
											label='Include lowercase letters'
											id='lower'
											name='lower'
											checked={config.lower}
											onChange={() => dispatch({ type: 'lower' })}
										/>
									</div>
									<div className='box'>
										<Toggle
											label='Include uppercase letters'
											id='upper'
											name='upper'
											checked={config.upper}
											onChange={() => dispatch({ type: 'upper' })}
										/>
									</div>
									<div className='box'>
										<Toggle
											label='Include numbers'
											id='numbers'
											name='numbers'
											checked={config.number}
											onChange={() => dispatch({ type: 'number' })}
										/>
									</div>
									<div className='box'>
										<Toggle
											label='Include symbols (!@#$%^&*)'
											id='symbol'
											name='symbol'
											checked={config.symbol}
											onChange={() => dispatch({ type: 'symbol' })}
										/>
									</div>
								</div>
							</section>
						</form>
					)}
					{showHistory && (
						<>
							<div className='label'>History</div>
							{history.map((pwd) => (
								<div className='box box--history'>
									<div
										className='password'
										dangerouslySetInnerHTML={{ __html: colorPassword(pwd) }}
									/>
									<div className='controls'>
										<button type='button' onClick={() => copyToClipboard(pwd)}>
											<CopyIcon />
										</button>
									</div>
								</div>
							))}
						</>
					)}
				</div>
				<nav className='app-navigation'>
					<button
						className={!showHistory ? 'active' : undefined}
						type='button'
						onClick={() => setShowHistory(false)}
					>
						Generator
					</button>
					<button
						className={showHistory ? 'active' : undefined}
						type='button'
						onClick={() => setShowHistory(true)}
					>
						History
					</button>
				</nav>
			</div>
		</div>
	)
}

export default PasswordGenerator
