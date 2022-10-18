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
		<div className='h-screen bg-white flex flex-col items-center justify-between p-10 space-y-4 text-white'>
			<div className='app-container'>
				<div>
					<div className='label'>Generated Password</div>
					<div className='box box--password'>{password}</div>
				</div>

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
						<label className='text-sm font-medium' htmlFor='symbol'>
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

					<div>
						<label for='checked-toggle' class='inline-flex relative items-center cursor-pointer'>
							<input
								type='checkbox'
								value=''
								id='checked-toggle'
								class='sr-only peer'
								checked={symbol}
								onChange={({ target }) => setSymbol(target.checked)}
							/>
							<div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span class='text-sm font-medium'>Checked toggle</span>
						</label>
					</div>

					<button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full'>
						Generate
					</button>
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
