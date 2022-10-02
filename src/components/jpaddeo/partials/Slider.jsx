export default function Slider({ value, onInput }) {
	return (
		<div className='flex items-center justify-center gap-2 text-white'>
			<span className='uppercase'>Length</span>
			<input type='range' value={value} onInput={onInput} />
			<label>{value}</label>
		</div>
	)
}
