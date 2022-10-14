import React from 'react'
import styles from '@components/devenapuros/styles/primaryButton.module.css'

export const PrimaryButton = ({ children, handleClick }) => {
	return (
		<button className={styles.primaryButton} onClick={handleClick}>
			{children}
		</button>
	)
}
