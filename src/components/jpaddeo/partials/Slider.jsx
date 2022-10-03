import { usePasswordGenerator } from '@components/jpaddeo/hooks/usePasswordGenerator'

export default function Slider() {
	const { passwordLength, updatePasswordLength } = usePasswordGenerator()

	const handleChangeLength = (e) => {
		updatePasswordLength(e.target.value)
	}

	return (
		<div className='flex items-center justify-center gap-2 text-white'>
			<span className='uppercase'>Length</span>
			<input type='range' value={passwordLength} onInput={handleChangeLength} />
			<label>{passwordLength}</label>
		</div>
	)
}
