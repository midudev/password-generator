import React, { useState } from 'react'
import { generatePassword } from '../helpes/generatePassword'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(10)
	const [lower, setLower] = useState(true)
	const [upper, setUpper] = useState(false)
	const [number, setNumber] = useState(false)
	const [symbol, setSymbol] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setPassword(generatePassword({ lower, upper, symbol, number, length }))
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
							checked={lower}
							onChange={({ target }) => setLower(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='lower'>Mayusculas</label>
						<input
							type='checkbox'
							checked={upper}
							onChange={({ target }) => setUpper(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='lower'>Numeros</label>
						<input
							type='checkbox'
							checked={number}
							onChange={({ target }) => setNumber(target.checked)}
						/>
					</div>

					<div>
						<label htmlFor='lower'>Simbolos</label>
						<input
							type='checkbox'
							checked={symbol}
							onChange={({ target }) => setSymbol(target.checked)}
						/>
					</div>

					<button>Generate</button>
				</form>
			</div>
		</div>
	)
}

export default PasswordGenerator
