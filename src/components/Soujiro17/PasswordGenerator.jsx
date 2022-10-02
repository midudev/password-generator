import React, { useEffect, useRef, useState } from 'react'
import styles from './css/styles.module.css'

const Circle = ({ bgColor, children }) => <div className={styles.circle} style={{backgroundColor: bgColor}}>{children}</div>

const ConsoleLine = ({ children, path }) => <section className={styles.console_line}><span className={styles.command_user}>soujiro17@hacktoberfest-2022: </span><span className={styles.simbol}>{path || '～'}</span>$ {children}</section>
const ConsoleResponse = ({ children, dir = false }) => {

	let content

	if(dir){
		content = React.Children.map(children, (child, i) => {
			return child.split(" ")?.map(file => {
				if(file.includes(".")){
					return <span className={`${styles.file} ${styles.file_common}`}>{file}</span>
				}
				return <span className={`${styles.folder} ${styles.file_common}`}>{file}</span>
			})
		})
	}

	return <section className={styles.console_response}>{content || children}</section>
}

const PasswordGenerator = () => {
	const [password, setPassword] = useState([])
	const [passwordLength, setPasswordLength] = useState(50)
	const [passwordLengthList, setPasswordLengthList] = useState([])

	const inputPasswordLength = useRef([])

	const handlePasswordLength = (e) => setPasswordLength(e.target.value)

	const handleKeyPress = (event) => {
		if(event.keyCode === 13){
			try{
				generatePassword()
				setPasswordLengthList(prev => [...prev, passwordLength])
			}catch(e){}
		}
	}

	const randomNumWithMinAndMax = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

	const generatePassword = () => {
		let generatedPassword = ''

		if(!/[0-9]/gi.test(passwordLength)) throw new Error()

		while (generatedPassword.length !== parseInt(passwordLength)) {
			generatedPassword += String.fromCharCode(randomNumWithMinAndMax(33, 126))
		}

		setPassword(prev => [...prev, generatedPassword])
		setPasswordLength('')
	}

	const onClickCopy = (i) => {
		navigator.clipboard.writeText(password[i])
	}

	const refIndex = passwordLengthList.length > 1? passwordLengthList.length - 1 : 0

	useEffect(() => {
		inputPasswordLength.current[refIndex].focus()
	}, [passwordLengthList.length])

	useEffect(() => {
		inputPasswordLength.current[refIndex].selectionStart = inputPasswordLength.current[refIndex].value.length;
		inputPasswordLength.current[refIndex].selectionEnd = inputPasswordLength.current[refIndex].value.length;
	}, [passwordLengthList.length])

	return (
		<div className={styles.generate_password_container}>
			<div className={styles.generate_password_header}>
				<Circle bgColor={'#EE7751'}>⨉</Circle>
				<Circle>⎯</Circle>
				<Circle>☐</Circle>
				<p className={styles.generate_password_title}>soujiro17@hacktoberfest-2022: ～</p>
			</div>
			<div className={styles.generate_password_content}>
				<ConsoleLine>cd /mnt</ConsoleLine>
				<ConsoleLine path="/mnt">cd c</ConsoleLine>
				<ConsoleLine path="/mnt/c">ls</ConsoleLine>
				<ConsoleResponse dir>c d wsl wslg generate_password.py</ConsoleResponse>
				<ConsoleLine path="/mnt/c">py generate_password.py --length <input ref={ref => inputPasswordLength.current[0] = ref} value={passwordLengthList[0] || passwordLength} onChange={handlePasswordLength} onKeyDown={handleKeyPress} className={styles.command_input} disabled={passwordLengthList.length > 1}/></ConsoleLine>
				{
					password.map((pass, i) => 
					<React.Fragment key={pass}>
							<ConsoleResponse>************* CONTRASEÑA GENERADA ************* </ConsoleResponse>
							<ConsoleResponse>************* <button onClick={() => onClickCopy(i)}>&nbsp;&nbsp;&nbsp;COPIAR CONTRASEÑA&nbsp;&nbsp;&nbsp;</button> *************</ConsoleResponse>
							<ConsoleResponse>{pass}</ConsoleResponse>
							<ConsoleLine path="/mnt/c">py generate_password.py --length <input ref={ref => inputPasswordLength.current[i] = ref} value={passwordLengthList[i+1] || passwordLength} onChange={handlePasswordLength} onKeyDown={handleKeyPress} className={styles.command_input} /></ConsoleLine>
						</React.Fragment>
					)
				}
			</div>
		</div>
	)
}

export default PasswordGenerator