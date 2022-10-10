import React, { useEffect, useRef } from 'react'
import styles from '@components/devenapuros/styles/slider.module.css'

export const Slider = ({ value, handleChange, min = 0, max = 100 }) => {
	const barRef = useRef()
	const buttonRef = useRef()

	useEffect(() => {
		barRef.current.style.width = `${value}%`
		buttonRef.current.style.left = `calc(${value}% - 11px)`
	}, [value])

	return (
		<div className={styles.container}>
			<div ref={barRef} className={styles.bar}></div>
			<div ref={buttonRef} className={styles.button}></div>
		</div>
	)
}
