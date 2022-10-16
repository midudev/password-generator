import React, { useState } from 'react'
import { generatePassword } from '../helpes/generatePassword'

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

	return (
		<div className='h-screen bg-white flex flex-col items-center p-10 space-y-4 text-black'>
			<div>
				{password}

				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='length'>
							Length{' '}
							<input
								type='number'
								min={5}
								max={128}
								value={length}
								onChange={({ target }) => setLength(target.value)}
							/>{' '}
						</label>
						<input
							type='range'
							id='length'
							name='length'
							min={5}
							max={128}
							value={length}
							onChange={({ target }) => setLength(target.value)}
						/>
					</div>

					<div>
						<label htmlFor='lower'>Minuculas</label>
						<input
							type='checkbox'
							id='lower'
							name='lower'
							checked={lower}
							onChange={({ target }) => setLower(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='upper'>Mayusculas</label>
						<input
							type='checkbox'
							id='upper'
							name='upper'
							checked={upper}
							onChange={({ target }) => setUpper(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='number'>Numeros</label>
						<input
							type='checkbox'
							id='numbers'
							name='numbers'
							checked={number}
							onChange={({ target }) => setNumber(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='symbol'>Simbolos</label>
						<input
							type='checkbox'
							id='symbol'
							name='symbol'
							checked={symbol}
							onChange={({ target }) => setSymbol(target.checked)}
						/>
					</div>

					<button>Generate</button>
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
