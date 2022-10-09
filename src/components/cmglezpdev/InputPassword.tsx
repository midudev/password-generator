import { ChangeEvent, useState } from 'react'

import clipboard from '@components/cmglezpdev/icons/clipboard-copy.svg'

export const InputPassword = () => {
	const [lenghtPassword, setLenghtPassword] = useState('10')

	const handleLenghtControl = (e:ChangeEvent<HTMLInputElement>) => {
		setLenghtPassword(e.target.value)
	}

	return (
		<>
			<div className='flex gap-2'>
				<input
					type='text'
					name='password'
					className='py-1 px-2 rounded w-96 outline-none text-gray-600 text-xl'
				/>
				<button className='flex items-center gap-1 px-2 bg-gray-400 rounded outline-none'>
					<img src={clipboard} alt='clipboard' className='w-4' />
					<span className='uppercase text-xs font-bold'>Copy</span>
				</button>
			</div>

			<div className='mt-3'>
				<p className='w-72 flex justify-between px-4'>
					<span className='text-white font-bold'>Lenght</span>
					<span className='text-white font-bold'>{ lenghtPassword }</span>
				</p>

				<input type='range' name='range' min='6' max='40' defaultValue='10' className='w-72 outline-none' onChange={handleLenghtControl} />
			</div>

			<button className='uppercase py-3 px-5 bg-blue-800 rounded-3xl text-white font-bold mt-4 outline-none hover:bg-blue-700 transition-colors'>Generate Password</button>
		</>
	)
}
