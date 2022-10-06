import useEffectOnce from './hooks/useEffectOnce'
import { useNumberCharacters } from './hooks/useNumberCharacters'
import { useRawPassword } from './hooks/useRawPassword'
import { randomWords } from './utils/generatePassword'

const Slider = () => {
	const [value, setValue] = useNumberCharacters()
	const [, setRawPass] = useRawPassword()

	useEffectOnce(() => {
		setRawPass(randomWords(8))
	})

	const handleChange = (event) => {
		const value = event.target.value
		setValue(value)
		setRawPass(randomWords(value))
	}

	return (
		<div className='flex flex-col gap-2 items-center'>
			<input
				type='range'
				className='accent-green-400'
				min={8}
				max={18}
				value={value}
				onChange={handleChange}
			/>
			<div className='flex text-white items-end gap-2'>
				<span className='text-xl'>{value}</span>
				<span>chars</span>
			</div>
		</div>
	)
}

export default Slider
