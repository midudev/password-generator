import { React } from 'react'
import './style.css'


const Button = ({buttonText, handleGeneratePassword}) => {

	return (

		<button
			onClick={handleGeneratePassword}
			type="button"
			className='button'
		>
			{buttonText?? 'Default button'}
		</button>
	)
}

export default Button