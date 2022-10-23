import React, { useReducer, useState } from 'react'
import { colorPassword } from '../helpers/colorPassword'
import { generatePassword } from '../helpers/generatePassword'
import { passwordReducer } from '../reducers/passwordReducer'
import CopyIcon from './CopyIcon'
import RefreshIcon from './RefreshIcon'
import Slider from './Slider'
import Toggle from './Toggle'

const initialConfig = { lower: true, length: 10 }
const firstPassword = generatePassword(initialConfig)

const PasswordGenerator = () => {
	const [config, dispatch] = useReducer(passwordReducer, initialConfig)
	const [password, setPassword] = useState(firstPassword)
	const [showMessage, setShowMessage] = useState(false)
	const [history, setHistory] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		const passwordGenerated = generatePassword(config)

		setPassword(passwordGenerated)
		setHistory([...history, passwordGenerated])
	}

	const handleCopyPass = () => {
		navigator.clipboard.writeText(password)

		setShowMessage(true)

		setTimeout(() => {
			setShowMessage(false)
		}, 2500)
	}

	return (
		<div className='site'>
			<div className='app-container'>
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
			</div>
		</div>
	)
}

export default PasswordGenerator
