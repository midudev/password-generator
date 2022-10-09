import React from 'react'
import styles from '@components/devenapuros/styles/passLengthLabel.module.css'

export const PassLengthLabel = () => {
	return (
		<div className={styles.container}>
			<span className={styles.label}>Password lenght</span>
			<span className={styles.result}>23</span>
		</div>
	)
}
