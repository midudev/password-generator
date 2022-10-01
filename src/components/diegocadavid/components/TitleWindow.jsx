import React from 'react'

const TitleWindow = ({ name }) => {
	return (
		<div className='p-4 bg-zinc-900 flex justify-between items-center'>
			<h2 className='capitalize text-white'>{name}</h2>
			{/* Buttons title */}
			<div className='flex gap-2'>
				<div className='rounded-full w-3 h-3 bg-red-400'> </div>
				<div className='rounded-full w-3 h-3 bg-yellow-200'> </div>
				<div className='rounded-full w-3 h-3 bg-green-300'> </div>
			</div>
		</div>
	)
}

export default TitleWindow
