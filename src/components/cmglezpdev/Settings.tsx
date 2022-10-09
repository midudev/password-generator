
export const Settings = () => {
	return (
		<div className='mt-6'>
			<h2 className='text-3xl text-center mb-2 text-white font-bold'>Settings</h2>

			<div className='grid grid-cols-2 w-60'>
				<div className='col-span-full text-center'>
					<input type='checkbox' name='strong_password' className='mr-2 outline-none' />
					<label htmlFor='strong_password' className='text-gray-400 text-xl'>Strong Password</label>
				</div>
				<div>
					<input type='checkbox' name='letters' className='mr-2 outline-none' />
					<label htmlFor='letters' className='text-gray-400 text-xl'>Letters</label>
				</div>
				<div>
					<input type='checkbox' name='numbers' className='mr-2 outline-none' />
					<label htmlFor='numbers' className='text-gray-400 text-xl'>Numbers</label>
				</div>
				<div>
					<input type='checkbox' name='div_in_groups' className='mr-2 outline-none' />
					<label htmlFor='div_in_groups' className='text-gray-400 text-xl'>Divide</label>
				</div>
				<div>
					<input type='checkbox' name='div_in-groups' className='mr-2 outline-none' />
					<label htmlFor='special_Characters' className='text-gray-400 text-xl'>#%!&@</label>
				</div>
			</div>
		</div>
	)
}
