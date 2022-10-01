import React, { useState } from 'react'

const InputTerminal = () => {

	const [inputValue, setInputValue] = useState('');


	
	const handleChange = (e) => {
		setInputValue(e.target.value);
	}
	
	const handleSubmit = (e) => {
		console.log(inputValue.trim().toLowerCase());
		e.preventDefault();
	}

	return (
		<div className='flex items-center gap-2'>
			<p> {'C:\\Users\\admin>'} </p>
			<form className='w-full' onSubmit={ handleSubmit }>
				<input
					type='text'
					className='bg-transparent focus-visible:outline-none w-full'
					maxLength={50}
					placeholder='help'
					spellCheck='false'
					onChange={ handleChange }
					value={inputValue}
				/>
			</form>
		</div>
	)
}

export default InputTerminal
