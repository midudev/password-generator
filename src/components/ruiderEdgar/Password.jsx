import React, { useState } from 'react'
import './styles/Password.css'

const Password = ({ passwordGenerated }) => {
	const [alert, setAlert] = useState(false)
	// -----function to copy to clipboard (separate to get clarity)------ //
	const copy = () => {
		navigator.clipboard.writeText(passwordGenerated)
		setAlert(true)
		setInterval(() => {
			setAlert(false)
		}, 3000)
	}
	return (
		<article className='containerPassword'>
			<h3 className='text-neutral-50 text-center my-4'>Password</h3>
			<div className='containerInput'>
				<input type='text' name='password Generated' className='inputPassword' id='inputPassword' value={passwordGenerated} readOnly={true} />
				<button className='transition ease-in-out delay-150  hover:scale-110 duration-150 ' onClick={copy}>
					<img src='https://cdn-icons-png.flaticon.com/512/8258/8258400.png' alt='icon copy' />
				</button>
				<div className={alert ? 'visibility absolute top-1 right-auto left-auto w-40 h-12 rounded-md grid col-span-1 place-content-center transition ease-in-out delay-150 -translate-x-10 bg-indigo-500' : 'invisible absolute'}>
					<h3 className='text-white'>Copy to clipboard</h3>
				</div>
			</div>
		</article>
	)
}

export default Password