import React from 'react'
import styles from '@components/devenapuros/styles/passwordQuality.module.css'

export const PasswordQuality = () => {
	return (
		<small className={styles.qualityContainer}>
			<span>Password quality:</span>
			<span className={styles.qualityResult}>Excellent</span>
		</small>
	)
}
