import React, { useState } from 'react'
import { generatePassword } from '../helpes/generatePassword'
import CopyIcon from './CopyIcon'
import RefreshIcon from './RefreshIcon'
import Slider from './Slider'
import Toggle from './Toggle'

const firstPassword = generatePassword({ lower: true, length: 10 })

const PasswordGenerator = () => {
	const [password, setPassword] = useState(firstPassword)
	const [length, setLength] = useState(10)
	const [lower, setLower] = useState(true)
	const [upper, setUpper] = useState(false)
	const [number, setNumber] = useState(false)
	const [symbol, setSymbol] = useState(false)
	const [history, setHistory] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		const passwordGenerated = generatePassword({ lower, upper, symbol, number, length })

		setPassword(passwordGenerated)
		setHistory([...history, passwordGenerated])
	}

	const handleCopyPass = () => {
		navigator.clipboard.writeText(password)
	}

	const clr = (s) => {
		return s
			.replace(/[!@#$%^&*]/g, (match) => `<span class="symbol">${match}</span>`)
			.replace(/\d/g, (match) => `<span class="number">${match}</span>`)
	}

	return (
		<div className='h-screen bg-white flex flex-col items-center justify-between p-10 space-y-4 text-white'>
			<div className='app-container'>
				<form onSubmit={handleSubmit}>
					<div className='label'>Generated Password</div>
					<div className='box box--password'>
						<div className='password' dangerouslySetInnerHTML={{ __html: clr(password) }} />

						<div className='controls'>
							<button type='submit'>
								<RefreshIcon />
							</button>
							<button type='button' onClick={handleCopyPass}>
								<CopyIcon />
							</button>
						</div>
					</div>

					<div className='label'>Length: {length}</div>
					<div className='box'>
						<Slider
							value={length}
							onChange={({ target }) => setLength(target.value)}
							min={5}
							max={128}
						/>
					</div>

					<div className='label'>Settings</div>
					<div className='generator-settings'>
						<div className='box'>
							<Toggle
								label='Include lowercase letters'
								id='lower'
								name='lower'
								checked={lower}
								onChange={({ target }) => setLower(target.checked)}
							/>
						</div>
						<div className='box'>
							<Toggle
								label='Include uppercase letters'
								id='upper'
								name='upper'
								checked={upper}
								onChange={({ target }) => setUpper(target.checked)}
							/>
						</div>
						<div className='box'>
							<Toggle
								label='Include numbers'
								id='numbers'
								name='numbers'
								checked={number}
								onChange={({ target }) => setNumber(target.checked)}
							/>
						</div>
						<div className='box'>
							<Toggle
								label='Include symbols (!@#$%^&*)'
								id='symbol'
								name='symbol'
								checked={symbol}
								onChange={({ target }) => setSymbol(target.checked)}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PasswordGenerator
