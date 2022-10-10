import React from 'react'
import { CopyIcon } from '@components/devenapuros/icons/CopyIcon'
import styles from '@components/devenapuros/styles/copyButton.module.css'

export const CopyButton = ({ handleClick }) => {
	return (
		<button className={styles.copyButton} onClick={handleClick}>
			<CopyIcon />
		</button>
	)
}
