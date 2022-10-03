import React from 'react'

function LevelIndicator({ length }) {
	if (length <= 8)
		return (
			<div className='flex gap-2 items-center '>
				<p className='font-medium text-sm'>Insecure</p>
				<span className='bg-red-500 rounded-full w-3 h-3'></span>
			</div>
		)

	if (length > 8 && length <= 14)
		return (
			<div className='flex gap-2 items-center '>
				<p className='font-medium text-sm'>Secure enough</p>
				<span className='bg-spark rounded-full w-3 h-3'></span>
			</div>
		)

	if (length > 14)
		return (
			<div className='flex gap-2 items-center '>
				<p className='font-medium text-sm'>Extremely secure</p>
				<span className='bg-green-400 rounded-full w-3 h-3'></span>
			</div>
		)

	return <></>
}

export default LevelIndicator
