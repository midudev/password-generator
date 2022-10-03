import React from 'react'

function Counter({ name, value, changeGenerationParam, disabled }) {
	/**
	 * Manage the hability of manipulate the counter value
	 * @param {('DISCOUNT' | 'ADD')} action Add or discount one unit from the counter current value
	 */
	const changerReducer = (action, newValue) => {
		if (value <= 0 && action === 'DISCOUNT') return
		if (value >= 20 && action === 'ADD') return
		changeGenerationParam(name, newValue)
	}

	return (
		<div className='flex gap-2 items-center'>
			<button
				disabled={value >= 20 || disabled}
				name={name + 'CounterPlus'}
				onClick={() => changerReducer('ADD', value + 1)}
				className='w-10 h-10 bg-spark text-black font-semibold rounded-full disabled:bg-spark/50 hover:opacity-75  transition-all duration-300 '
			>
				+
			</button>
			<button
				disabled={value <= 0}
				name={name + 'CounterPlus'}
				onClick={() => changerReducer('DISCOUNT', value - 1)}
				className='w-10 h-10 bg-black/60 text-white font-semibold rounded-full disabled:bg-black/20 hover:opacity-75 hover:disabled:cursor-not-allowed transition-all duration-300 '
			>
				-
			</button>
		</div>
	)
}

export default Counter
