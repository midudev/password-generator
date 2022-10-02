import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import Clipboard from './Clipboard'
import { initialValues, generatePassword } from './utils'

function Generator() {
	const [password, setPassword] = useState('G8xBZ2HmHf4ff1GG8xBZ')
	const [options, setOptions] = useState(initialValues)

	const handleLength = (e) => {
		setOptions({
			...options,
			[e.target.id]: e.target.value
		})
	}

	const handleCheckbox = (e) => {
		setOptions({
			...options,
			[e.target.id]: e.target.checked
		})
	}

	useEffect(() => {
		setPassword(generatePassword(options))
	}, [options])

	return (
		<>
			<div className='mx-auto w-full bg-zinc-100 rounded-sm p-4 flex items-center gap-4 flex-wrap'>
				<Clipboard onClick={() => navigator.clipboard.writeText(password)} />
				<span className='text-lg tracking-widest font-bold break-all'>{password}</span>
			</div>
			<div className='mt-4 mx-auto w-full bg-zinc-100 rounded-sm p-4 grid gap-4'>
				<div className='flex items-center gap-4 sm:gap-8'>
					<label htmlFor='length' className='block font-medium'>
						Length
					</label>
					<input
						id='length'
						type='range'
						value={options?.length}
						onChange={(e) => handleLength(e)}
						min='0'
						max='30'
						step='2'
						className='w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-600'
					/>
					<span className='font-medium'>{options?.length}</span>
				</div>
				<div className='flex items-center space-x-8'>
					<Checkbox
						id='includeNumbers'
						onChange={(e) => handleCheckbox(e)}
						checked={options?.includeNumbers}
					>
						Numbers
					</Checkbox>
					<Checkbox
						id='includeSymbols'
						onChange={(e) => handleCheckbox(e)}
						checked={options?.includeSymbols}
					>
						Symbols
					</Checkbox>
				</div>
			</div>
		</>
	)
}

export default Generator
