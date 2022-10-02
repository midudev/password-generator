
export default function Slider({ value, onChange, min, max }) {
	return (
		<div className='text-center my-6'>
			<input
				className='w-full max-w-lg'
				type='range'
				min={min || 1}
				max={max || 100}
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<div>Length: {value}</div>
		</div>
	)
}
