import React, { useEffect, useRef } from 'react'
import styles from '@components/devenapuros/styles/slider.module.css'

export const Slider = ({ value = 6, handleChange, min = 6, max = 106 }) => {
	const fillRef = useRef()
	useEffect(() => {
		console.log('seeting width:', value - 6)
		fillRef.current.style.width = `${value - 6}%`
	}, [value])

	return (
		<div className={styles.container}>
			<span className={styles.bar}>
				<span ref={fillRef} className={styles.fill} />
			</span>
			<input
				id='slider'
				className={styles.slider}
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}
