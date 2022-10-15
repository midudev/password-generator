import React, { useState, useEffect } from 'react'
import styles from '../style.module.css'

const ButtonOptions = ({ config: { name, disable, onInputPass, configPassword } }) => {
	return (
		<button
			disabled={!disable && configPassword[name]}
			onClick={onInputPass}
			name={name}
			className={`text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46] ${
				configPassword[name] ? styles.drzz21text : styles.drzz21textDisabled
			} drop-shadow-2xl`}
		>
			{name}
		</button>
	)
}
export default ButtonOptions
