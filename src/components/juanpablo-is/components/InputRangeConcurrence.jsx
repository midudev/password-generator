import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'

const InputRangeConcurrence = () => {
	const { concurrenceLength, setConcurrenceLength } = useContext(passwordContext)

	return (
		<div className='my-2 flex items-center w-full gap-4 flex-col sm:flex-row'>
			<div className='flex items-center'>
				<p className='whitespace-nowrap text-lg text-gray-500 lg:text-xl dark:text-gray-400 font-bold'>
					Count concurrence: <span className='px-5 font-normal'>{concurrenceLength}</span>
				</p>
			</div>

			<input
				id='default-range'
				className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 overflow-hidden py-2'
				type='range'
				value={concurrenceLength}
				step={1}
				min={1}
				max={5}
				onChange={(e) => setConcurrenceLength(e.target.value)}
			/>
		</div>
	)
}

export default InputRangeConcurrence
