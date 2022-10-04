import React from 'react'
import styles from '@components/devenapuros/styles/passField.module.css'
import { CopyButton } from '@components/devenapuros/CopyButton'

export const PassField = ({ value }) => {
	return (
		<div className={styles.container}>
			<input type='text' placeholder='Generating password...' value={value} readOnly />
			<span className={styles.separator}></span>
			<CopyButton />
		</div>
	)
}
