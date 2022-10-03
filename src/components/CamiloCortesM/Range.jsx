
export const Range = ({ rangeCharacters, setRangeCharacters }) => {
	return (
		<div>
			<div className='flex justify-between'>
				<label htmlFor='characterLength' className='mb-2 text-sm'>
					Character length
				</label>
				<label>{rangeCharacters}</label>
			</div>
			<input
				className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
				id='characterLength'
				type='range'
				min='6'
				max='25'
				name='characterLength'
				value={rangeCharacters}
				onChange={(e) => setRangeCharacters(e.target.value)}
			/>
		</div>
	)
}
