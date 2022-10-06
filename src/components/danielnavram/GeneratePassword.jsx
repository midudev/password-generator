import React, { useState } from 'react'
import PasswordInput from './helpers/PasswordInput'
import PasswordOptions from './helpers/PasswordOptions'

const GeneratePassword = () => {
	const [isDisabled, setIsDisabled] = useState(false)
	return (
		<div className='flex flex-col h-screen justify-center items-center max-w-lg mx-auto px-6 md:max-w-ml lg:max-w-lg md:px-0 sm:px-0'>
			<h2 className='text-center text-orange-500 text-3xl font-semibold font-sans mx-auto my-10'>Auto Generate Password</h2>
			<PasswordInput isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
			<PasswordOptions setIsDisabled={setIsDisabled} />
		</div>
	)
}

export default GeneratePassword
