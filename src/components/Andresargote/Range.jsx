export function Range({ value, onChange }) {
	return (
		<>
			<label htmlFor='range' className='text-white text-sm font-md font-mono uppercase'>
				Longitud (min 8 max 22)
			</label>
			<input
				value={value}
				type='range'
				id='range'
				min='8'
				name='passwordLength'
				max='22'
				onChange={onChange}
			/>
			<output className='font-mono text-2xl text-white text-center'>{value}</output>
		</>
	)
}
