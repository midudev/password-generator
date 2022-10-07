import React from 'react'
import styles from './styles.module.css'

export default function TextInput({ value = '', placeholder = 'placeholder' }) {
	return (
		<input className={styles.input} type='text' readOnly value={value} placeholder={`[ ${placeholder} ]`} />
	)
}
