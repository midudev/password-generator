
const InputRange = ({ name, min, max, value, onChange }) => {
	return (
		<input type='range' name={name} min={min} max={max} value={value} onChange={onChange} />
	)
}

export default InputRange
