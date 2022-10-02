import React, { useState } from 'react'
import styles from './styles.module.css'
import filesSvg from './files.svg'
import Toast from './Toast'
import { run } from './run'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(50)

	const handlePasswordLength = (e) => setPasswordLength(e.target.value)

	const randomNumWithMinAndMax = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

	const generatePassword = () => {

		run('Contraseña generada!')

		let generatedPassword = ''

		while (generatedPassword.length !== parseInt(passwordLength)) {
			generatedPassword += String.fromCharCode(randomNumWithMinAndMax(33, 126))
		}

		setPassword(generatedPassword)
	}

	const onClickCopy = () => {
		try{
			navigator.clipboard.writeText(password)
			run('Contraseña copiada con éxito!', true)
		}catch(err){
			run('Error al copiar la contraseña!', false)
		}
	}

	return (
		<>
			<Toast />
			<div className={styles.generate_password_container}>
				<div className={styles.generate_password_result}>
					<p className={styles.password}>{password}</p>
					<div className={styles.clipboard} onClick={onClickCopy}>
						<img src={filesSvg} alt='files' className={styles.clipboard_icon} />
					</div>
				</div>
				<div className={styles.input_wrapper}>
					<input className={styles.input} type='range' value={passwordLength} min={1} step={1} onChange={handlePasswordLength} />
					<output className={styles.output}>{passwordLength}</output>
				</div>
				<button className={styles.btn} onClick={generatePassword}>Generar contraseña</button>
			</div>
		</>
	)
}

export default PasswordGenerator