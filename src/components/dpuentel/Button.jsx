import React from 'react'

export default function Button({ text, onClick }) {
	return (
		<button
			className='bg-green-300 hover:bg-green-700 text-slate-800 font-bold py-2 px-4 w-full'
			onClick={onClick}
		>
			{text}
		</button>
	)
}
