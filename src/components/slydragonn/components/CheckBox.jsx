const CheckBox = ({ label, handleClick, chars }) => {
	const setPasswordChars = (checked) => {
		if (!checked) {
			return handleClick(chars, false)
		}
		handleClick(chars, true)
	}

	return (
		<div>
			<label htmlFor={`slydragon-checkbox-${label}`}>{label}</label>
			<input
				type='checkbox'
				id={`slydragon-checkbox-${label}`}
				onClick={(evt) => setPasswordChars(evt.target.checked)}
			/>
		</div>
	)
}

export default CheckBox
