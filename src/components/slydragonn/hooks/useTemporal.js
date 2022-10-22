import { useState, useEffect } from 'react'

// Hide information after a time
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
