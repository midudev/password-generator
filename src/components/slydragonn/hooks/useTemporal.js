import { useState, useEffect } from 'react'

// Temporal Information
const useTemporal = (showTime) => {
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState('')

	const showInfo = (message) => {
		setMessage(() => message)
		return setShow(() => true)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setShow(() => false)
		}, showTime)

		return () => {
			clearInterval(interval)
		}
	}, [show])

	return [show, showInfo, message]
}

export default useTemporal
