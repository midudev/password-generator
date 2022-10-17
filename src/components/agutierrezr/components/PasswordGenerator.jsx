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
		<div className='h-screen bg-white flex flex-col items-center justify-between p-10 space-y-4 text-black'>
			<div>
				{password}

				<form onSubmit={handleSubmit}>
					<div className='flex items-center justify-between mb-4'>
						<label className='text-sm font-medium' htmlFor='length'>
							Length{' '}
							<input
								className=''
								type='number'
								min={5}
								max={128}
								value={length}
								onChange={({ target }) => setLength(target.value)}
							/>{' '}
						</label>
						<input
							type='range'
							className='h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
							id='length'
							name='length'
							min={5}
							max={128}
							value={length}
							onChange={({ target }) => setLength(target.value)}
						/>
					</div>

					<div className='flex items-center justify-between mb-4'>
						<label className='text-sm font-medium' htmlFor='lower'>
							Minuculas
						</label>
						<input
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
							type='checkbox'
							id='lower'
							name='lower'
							checked={lower}
							onChange={({ target }) => setLower(target.checked)}
						/>
					</div>

					<div className='flex items-center justify-between mb-4'>
						<label className=' text-sm font-medium' htmlFor='upper'>
							Mayusculas
						</label>
						<input
							type='checkbox'
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
							id='upper'
							name='upper'
							checked={upper}
							onChange={({ target }) => setUpper(target.checked)}
						/>
					</div>

					<div className='flex items-center justify-between mb-4'>
						<label className='text-sm font-medium' htmlFor='number'>
							Numeros
						</label>
						<input
							type='checkbox'
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
							id='numbers'
							name='numbers'
							checked={number}
							onChange={({ target }) => setNumber(target.checked)}
						/>
					</div>

					<div className='flex items-center justify-between mb-4'>
						<label className=' text-sm font-medium' htmlFor='symbol'>
							Simbolos
						</label>
						<input
							type='checkbox'
							className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600'
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
