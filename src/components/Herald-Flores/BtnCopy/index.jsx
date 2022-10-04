import React from 'react'
import useGeneratorPass from '../hooks/useGeneratorPass'

const BtnCopy = () => {
	const btnOuterStyle = {
		filter:
			'drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px)'
	}
	const btnInnerStyle = {
		clipPath: 'polygon(8px 0px, 100% 0px, 100% 72%, calc(100% - 8px) 100%, 0px 100%, 0px 8px)'
	}
	const { copyClipBoard } = useGeneratorPass()

	return (
		<button onClick={() => copyClipBoard()} style={btnOuterStyle} className='w-1/4 h-9'>
			<span
				style={btnInnerStyle}
				className='w-full h-9 grid place-content-center text-gray-100 dark:text-gray-900 bg-gradient-to-r from-gray-700 dark:from-yellow-300 via-gray-800 dark:via-cyan-400 to-gray-900 dark:to-cyan-600 hover:bg-gradient-to-tr focus:outline-none focus:ring-0'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
					/>
				</svg>
			</span>
		</button>
	)
}

export default BtnCopy
