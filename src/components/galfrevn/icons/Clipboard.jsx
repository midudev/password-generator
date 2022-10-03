import * as React from 'react'

const Clipboard = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		viewBox='0 0 24 24'
		fill='none'
		stroke='#FFF'
		strokeWidth={3}
		strokeLinecap='round'
		strokeLinejoin='round'
		className='feather feather-clipboard'
		{...props}
	>
		<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
		<rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
	</svg>
)

export default Clipboard
