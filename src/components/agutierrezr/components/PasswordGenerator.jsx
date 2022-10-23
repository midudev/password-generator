import React, { useState } from 'react'
import { generatePassword } from '../helpes/generatePassword'
import CopyIcon from './CopyIcon'
import RefreshIcon from './RefreshIcon'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
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

	return (
		<div className='h-screen bg-white flex flex-col items-center justify-between p-10 space-y-4 text-white'>
			<div className='app-container'>
				<form onSubmit={handleSubmit}>
					<div>
						<div className='label'>Generated Password</div>
						<div className='box box--password'>
							<div className='password'>{password}</div>

							<div className='controls'>
								<button type='submit'>
									<RefreshIcon />
								</button>
								<button type='button' onClick={handleCopyPass}>
									<CopyIcon />
								</button>
							</div>
						</div>
					</div>

					<div className='label'>Length: {length}</div>
					<div className='box'>
						<div className='slider'>
							<div className='slider__value--left'>5</div>
							<input
								type='range'
								className='slider-field'
								id='length'
								name='length'
								min={5}
								max={128}
								value={length}
								onChange={({ target }) => setLength(target.value)}
							/>
							<div className='slider__value--right'>128</div>
						</div>
						<div className='field'></div>
					</div>

					<div className='label'>Settings</div>
					<div className='generator-settings'>
						<div className='box'>
							<div className='flex items-center justify-between'>
								<label htmlFor='lower'>Include lowercase letters</label>
								<input
									className='toggle'
									type='checkbox'
									id='lower'
									name='lower'
									checked={lower}
									onChange={({ target }) => setLower(target.checked)}
								/>
							</div>
						</div>
						<div className='box'>
							<div className='flex items-center justify-between'>
								<label htmlFor='upper'>Include uppercase letters</label>
								<input
									className='toggle'
									type='checkbox'
									id='upper'
									name='upper'
									checked={upper}
									onChange={({ target }) => setUpper(target.checked)}
								/>
							</div>
						</div>
						<div className='box'>
							<div className='flex items-center justify-between'>
								<label htmlFor='numbers'>Include numbers</label>
								<input
									className='toggle'
									type='checkbox'
									id='numbers'
									name='numbers'
									checked={number}
									onChange={({ target }) => setNumber(target.checked)}
								/>
							</div>
						</div>
						<div className='box'>
							<div className='flex items-center justify-between'>
								<label htmlFor='symbol'>Include symbols (!@#$%^&*)</label>
								<input
									className='toggle'
									type='checkbox'
									id='symbol'
									name='symbol'
									checked={symbol}
									onChange={({ target }) => setSymbol(target.checked)}
								/>
							</div>
						</div>
					</div>
				</form>

				<h2>Historial</h2>

				<ul>
					{history.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PasswordGenerator
