import './style/input.css'

export const Input = ({ handler, value }) => {
	return (
		<div id='eyubkh-input'>
			<label htmlFor='eyubkh-input-range'>{value <= 9 ? '0' + value : value}</label>
			<input
				id='eyubkh-input-range'
				onChange={handler}
				type='range'
				value={value}
				min='5'
				max='16'
			/>
		</div>
	)
}
