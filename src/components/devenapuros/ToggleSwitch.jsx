import React from 'react'
import styles from '@components/devenapuros/styles/toggleSwitch.module.css'

export const ToggleSwitch = ({ active, handleClick }) => {
	return (
		<div className={`${styles.toggleContainer} ${active && styles.active}`} onClick={handleClick}>
			<span className={styles.toggleCircle}></span>
		</div>
	)
}
