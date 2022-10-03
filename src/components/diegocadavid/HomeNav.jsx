import React from 'react'
import HomeNavIcons from './HomeNavIcons'

const HomeNav = () => {
	return (
		<div className='absolute bottom-0 bg-slate-700 inset-x-0 h-12 flex justify-center items-center gap-3'>
			<HomeNavIcons />
			<HomeNavIcons />
			<HomeNavIcons />
			<div className='absolute right-3'>
				<div className='flex justify-center items-center gap-3'>
					{/* Icons */}
					<div className='flex gap-3 mr-3'>
						<div className='w-4 h-4 bg-slate-400'></div>
						<div className='w-4 h-4 bg-slate-400'></div>
						<div className='w-4 h-4 bg-slate-400'></div>
					</div>
					<div className='leading-4 text-right text-sm text-slate-100 flex flex-col'>
						<p className=''> Hora </p>
						<p className=''> Fecha </p>
					</div>
					<div className='bg-slate-400 h-4 w-4 rounded-full flex items-center justify-center cursor-pointer'>
						<p className='text-sm'>1</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeNav
