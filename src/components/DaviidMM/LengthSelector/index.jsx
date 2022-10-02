import React from 'react'
import './styles.css'

const LengthSelector = ({ length, setLength }) => {
	return <div className='flex flex-row items-center justify-center gap-4 w-full'>
		<input className='rounded-lg appearance-none bg-purple-300 h-3 w-56' type='range' value={length} min='5' max='24' onChange={(e) => setLength(e.target.value)} />
		<input className='bg-purple-300 text-2xl pl-2 w-14 rounded-lg' type='number' value={length} min='5' onChange={(e) => setLength(e.target.value)} />
	</div>
}

export default LengthSelector