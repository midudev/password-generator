const InputRange = ({ value, setPasswordLength, min, max }) => {
	return (
		<input
			type='range'
			min={min}
			max={max}
			value={value}
			onChange={(value) => setPasswordLength(value.target.value)}
		/>
	)
}

export default InputRange
