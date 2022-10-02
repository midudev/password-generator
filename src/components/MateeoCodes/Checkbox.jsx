import React from 'react'

function Checkbox({ id, children, ...props }) {
	return (
		<div className='flex items-center space-x-4'>
			<input id={id} type='checkbox' className='w-5 h-5 ring-blue-500' {...props} />
			<label htmlFor={id} className='font-medium'>
				{children}
			</label>
		</div>
	)
}

export default Checkbox
