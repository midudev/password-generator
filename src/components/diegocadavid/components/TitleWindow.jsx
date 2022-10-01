import React from 'react'

const TitleWindow = ({ name }) => {
	return (
		<div className='p-4 flex justify-between items-center bg-[#060505]'>
			<h2 className='capitalize text-white'>{name}</h2>
			{/* Buttons title */}
			<div className='flex gap-2'>
				<div className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-red-700 bg-red-400'> </div>
				<div className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-yellow-600 bg-yellow-200'> </div>
				<div className='rounded-full w-3 h-3 cursor-pointer transition-colors ease-linear hover:bg-green-600 bg-green-300'> </div>
			</div>
		</div>
	)
}

export default TitleWindow
