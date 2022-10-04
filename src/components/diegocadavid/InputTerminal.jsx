import React, { useState } from 'react'

const InputTerminal = ({ addCommand }) => {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (inputValue.trim().toLowerCase() == '') {
			return false
		}

		addCommand(inputValue.trim().toLowerCase())
		setInputValue('')
	}

	return (
		<div className='flex items-center gap-2'>
			<p> {'C:\\Users\\admin>'} </p>
			<form className='w-full' onSubmit={handleSubmit}>
				<input
					type='text'
					className='bg-transparent focus-visible:outline-none w-full'
					maxLength={100}
					placeholder='help'
					spellCheck='false'
					onChange={handleChange}
					value={inputValue}
				/>
			</form>
		</div>
	)
}

export default InputTerminal
