import React, { useEffect, useState } from 'react'
import LengthSelector from '../LengthSelector'

const Property = ({ checked, description, id, onChange }) => {
	return (
		<div className='flex flex-col'>
			<input
				checked={checked}
				className='peer hidden'
				id={id}
				type='checkbox'
				onChange={onChange}
			/>
			<label
				className='block px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 peer-checked:bg-purple-500 peer-checked:text-white'
				htmlFor={id}
			>
				{description}
			</label>
		</div>
	)
}

const PasswordProperties = ({ properties, setProperties }) => {
	const [length, setLength] = useState(properties.length)
	const [uppercase, setUppercase] = useState(properties.uppercase)
	const [lowercase, setLowercase] = useState(properties.lowercase)
	const [numbers, setNumbers] = useState(properties.numbers)
	const [symbols, setSymbols] = useState(properties.symbols)

	useEffect(() => {
		setProperties({ length, uppercase, lowercase, numbers, symbols })
	}, [length, uppercase, lowercase, numbers, symbols])

	return (
		<div className='flex flex-col gap-4'>
			<LengthSelector length={length} setLength={setLength} />
			<div className='flex flex-row gap-2'>
				<Property
					checked={uppercase}
					description='Mayúsculas'
					id='uppercase'
					onChange={(e) => setUppercase(e.target.checked)}
				/>
				<Property
					checked={lowercase}
					description='Minúsculas'
					id='lowercase'
					onChange={(e) => setLowercase(e.target.checked)}
				/>
				<Property
					checked={numbers}
					description='Números'
					id='number'
					onChange={(e) => setNumbers(e.target.checked)}
				/>
				<Property
					checked={symbols}
					description='Símbolos'
					id='symbols'
					onChange={(e) => setSymbols(e.target.checked)}
				/>
			</div>
		</div>
	)
}

export default PasswordProperties
