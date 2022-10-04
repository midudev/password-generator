import React from 'react'
import styles from './styles.module.css'

export default function TextInput() {
	return (
		<input className={styles.input} type='text' placeholder='[ Generated password... ]' />
	)
}
