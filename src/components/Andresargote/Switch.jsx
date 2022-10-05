export function Switch({ value, name, id, label, onChange }) {
	return (
		<div className='flex items-center justify-between'>
			<label htmlFor={id} className='text-white text-sm font-md font-mono uppercase'>
				{label}
			</label>
			<div>
				<label htmlFor={id} className='inline-flex relative items-center cursor-pointer w-fit'>
					<input
						type='checkbox'
						value={value}
						id={id}
						className='sr-only peer'
						name={name}
						onChange={onChange}
					/>
					<div
						className={
							"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
						}
					/>
				</label>
			</div>
		</div>
	)
}
