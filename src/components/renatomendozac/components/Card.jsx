import React from 'react'

const Card = (props) => (
	<div className='bg-slate-500 p-2 text-slate-50 flex justify-between items-center rounded-sm'>
		{props.children}
	</div>
)

export default Card
