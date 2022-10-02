export default function CharOptions({ CHARS, options, onChange }) {
	return (
		<div className='flex items-center gap-2'>
			{Object.keys(CHARS).map((char) => (
				<>
					<input
						key={char}
						id={char}
						type='checkbox'
						value={char}
						onChange={onChange}
						checked={options.includes(char)}
						className='w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
					/>
					<label
						htmlFor={char}
						className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-200'
					>
						{char}
					</label>
				</>
			))}
		</div>
	)
}
