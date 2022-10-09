
export const Settings = () => {
	return (
		<div className='mt-8'>
			<h2 className='text-2xl text-center mb-2'>Settings</h2>

			<div className='grid grid-cols-2 w-60'>
				<div className='col-span-full text-center'>
					<input type='checkbox' name='strong_password' className='mr-2' />
					<label htmlFor='strong_password'>Strong Password</label>
				</div>
				<div>
					<input type='checkbox' name='letters' className='mr-2' />
					<label htmlFor='letters'>Letters</label>
				</div>
				<div>
					<input type='checkbox' name='numbers' className='mr-2' />
					<label htmlFor='numbers'>Numbers</label>
				</div>
				<div>
					<input type='checkbox' name='div_in_groups' className='mr-2' />
					<label htmlFor='div_in_groups'>Divide</label>
				</div>
				<div>
					<input type='checkbox' name='div_in-groups' className='mr-2' />
					<label htmlFor='special_Characters'>#%!&@</label>
				</div>
			</div>
		</div>
	)
}
