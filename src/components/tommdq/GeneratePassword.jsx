import React from 'react'

const GeneratePassword = ({ generatePassword }) => {
	return (
		<button
			onClick={generatePassword}
			className='bg-[#29335C] text-[#E4842E] p-4 font-medium text-xl rounded outline-none transition-colors duration-300 hover:bg-[#303c6c]'
		>
			Generate Password
		</button>
	)
}

export default GeneratePassword
