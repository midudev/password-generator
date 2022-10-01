import React from 'react'
import ButtonRenew from './ButtonRenew'
import Hint from './Hint'
import PasswordInput from './PasswordInput'
import Slider from "./Slider"

const PasswordGenerator = () => {
	return (
		<div className="flex flex-col gap-4 mt-4 items-center">
			<PasswordInput />
			<Hint />
			<div className='flex flex-col md:flex-row gap-4 items-center'>
				<Slider />
				<ButtonRenew />
			</div>
		</div>
	)
}

export default PasswordGenerator
