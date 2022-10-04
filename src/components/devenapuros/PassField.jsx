import React from 'react'
import { CopyIcon } from '@components/devenapuros/icons/CopyIcon'
import styles from '@components/devenapuros/styles/passField.module.css'

export const PassField = ({ value }) => {
	return (
		<div className={styles.container}>
			<input type='text' placeholder='Your password goes here' value={value} readOnly />
			<span className={styles.separator}></span>
			<button className='copy-btn'>
				<CopyIcon />
			</button>
		</div>
	)
}
