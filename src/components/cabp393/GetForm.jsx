import { useState, useEffect } from 'react'
import getPassword from './getPassword'
import './GetForm.css'

export default function GetForm() {
	const [length, setLength] = useState(4)
	const [numbers, setNumbers] = useState(false)
	const [upperCase, setUpperCase] = useState(false)
	const [symbols, setSymbols] = useState(false)
	const [notification, setNotification] = useState(false)
	const [password, setPassword] = useState({})

	useEffect(() => {
		setPassword(getPassword(upperCase, numbers, symbols, length))
	}, [length, numbers, upperCase, symbols])

	return (
		<div id='cabp393' className='container border-gradient'>
			<div className={notification ? 'notification noti-on' : 'notification'}>password copied</div>
			<div
				className='display-password'
				onClick={() => {
					navigator.clipboard.writeText(password.password)
					setNotification(true)
					setTimeout(() => {
						setNotification(false)
					}, 1000)
				}}
			>
				{password.password}
			</div>

			<input
				type='range'
				min={4}
				max={50}
				value={length}
				onChange={(e) => setLength(e.target.value)}
			/>

			<div className='btn-container'>
				<div onClick={() => setNumbers((prev) => !prev)} className={numbers ? 'btn enable' : 'btn'}>
					numbers
				</div>

				<div
					onClick={() => setUpperCase((prev) => !prev)}
					className={upperCase ? 'btn enable' : 'btn'}
				>
					uppercase
				</div>

				<div onClick={() => setSymbols((prev) => !prev)} className={symbols ? 'btn enable' : 'btn'}>
					symbols
				</div>
			</div>

			<div className='combinations'>
				<div>{password.security}</div>
				<span>possible combinations</span>
			</div>
		</div>
	)
}
