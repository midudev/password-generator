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

	function handleCopy() {
		navigator.clipboard.writeText(password.password)
		setNotification(true)
		setTimeout(() => {
			setNotification(false)
		}, 1000)
	}

	function ButtonConfig({ title, state, setState }) {
		return (
			<div
				onClick={() => setState((prev) => !prev)}
				className={state ? 'cabp393-btn cabp393-enable' : 'cabp393-btn'}
			>
				{title}
			</div>
		)
	}

	return (
		<div className='cabp393-container cabp393-border-gradient'>
			<div className='cabp393-display-password' onClick={handleCopy}>
				{password.password}
			</div>

			<input
				type='range'
				min={4}
				max={50}
				value={length}
				onChange={(e) => setLength(e.target.value)}
			/>

			<div className='cabp393-btn-container'>
				<ButtonConfig title='numbers' state={numbers} setState={setNumbers} />
				<ButtonConfig title='uppercase' state={upperCase} setState={setUpperCase} />
				<ButtonConfig title='symbols' state={symbols} setState={setSymbols} />
			</div>

			<div className='cabp393-combinations'>
				<div>{password.security}</div>
				<span>possible combinations</span>
			</div>

			<div
				className={notification ? 'cabp393-notification cabp393-noti-on' : 'cabp393-notification'}
			>
				password copied
			</div>
		</div>
	)
}
