import React from 'react'

const CopyButton = ({ copyPassword }) => {
	return (
		<button onClick={copyPassword} className='outline-none'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-copy hover:stroke-[#a7a7cc] transition duration-300 hover:ease-in-out hover:scale-110'
				width='44'
				height='44'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='#E4842E'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<rect x='8' y='8' width='12' height='12' rx='2' />
				<path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
			</svg>
		</button>
	)
}

export default CopyButton
