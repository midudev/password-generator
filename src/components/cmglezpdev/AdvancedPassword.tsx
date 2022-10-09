import { Settings } from './Settings'

import clipboard from '@components/cmglezpdev/icons/clipboard-copy.svg'

export const AdvancedPassword = () => {
	return (
		<div className='flex flex-col items-center'>
			<div className='flex gap-2'>
				<input
					type='text'
					name='password'
					className='py-1 px-2 rounded w-96 outline-none text-gray-600 text-xl'
				/>
				<button className='flex items-center gap-1 px-2 bg-gray-600 rounded outline-none'>
					<img src={clipboard} alt='clipboard' className='w-4' />
					<span className='uppercase text-xs font-bold'>Copy</span>
				</button>
			</div>

			<div className='flex gap-2 mt-2'>
				<input
					type='text'
					name='phrasal'
					className='py-1 px-2 rounded w-96 outline-none text-gray-600 text-xl'
				/>
				<button className='flex items-center gap-1 px-2 bg-gray-600 rounded outline-none'>
					<img src={clipboard} alt='clipboard' className='w-4' />
					<span className='uppercase text-xs font-bold'>Copy</span>
				</button>
			</div>


			<div className='mt-3'>
				<p className='w-72 flex justify-between px-4'>
					<span>Lenght</span>
					<span>7</span>
				</p>

				<input type='range' name='range' min='6' max='100' className='w-72 outline-none' />
			</div>

			<button className='uppercase py-3 px-5 bg-blue-800 rounded-3xl text-white font-bold mt-4'>Generate Password</button>

		</div>
	)
}
