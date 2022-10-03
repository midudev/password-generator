import React from 'react'

const Alert = ({ isCopied }) => {
	return (
		<div
			className={`${
				isCopied ? 'opacity-100' : 'opacity-0'
			} flex items-center gap-1 transition duration-200 self-center p-2 rounded bg-[#29335C] top-[30%] right-[44%]`}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='icon icon-tabler icon-tabler-clipboard-check'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='#a7a7cc'
				fill='none'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
				<rect x='9' y='3' width='6' height='4' rx='2' />
				<path d='M9 14l2 2l4 -4' />
			</svg>
			<label className='font-medium text-sm' style={{ color: '#a7a7cc' }}>
				Copied to clipboard!
			</label>
		</div>
	)
}

export default Alert
