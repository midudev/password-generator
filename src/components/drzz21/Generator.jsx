import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import genPass from './helpers/generate-password'

const Generator = () => {
	const [configPassword, setConfigPassword] = useState({
		length: '20',
		upperCase: true,
		lowerCase: true,
		numbers: true,
		symbols: true
	})
	const [password, setPassword] = useState(null)

	const disable = Object.values(configPassword).filter((x) => x === true).length > 1

	const onInputPass = (e) => {
		const { name, value, type } = e.target
		setConfigPassword((prev) => {
			if (type === 'submit') {
				return { ...prev, [name]: !prev[name] }
			} else if (type === 'range') {
				return { ...prev, [name]: value }
			}
		})
	}

	const generatePassword = (e) => {
		setPassword(genPass(configPassword))
	}

	useEffect(() => {
		generatePassword()
	}, [configPassword])

	return (
		<div className={styles.drzz21container + ' flex justify-center items-center flex-col'}>
			{/* <div className='text-white'>{JSON.stringify(configPassword)}</div> */}

			<div className='flex flex-row drop-shadow-2xl items-center'>
				<div className='flex flex-col'>
					<div className={`text-5xl font-bold mb-4 ${styles.drzz21text}`}>Password Generator</div>
					<div className='w-full'>
						<button
							onClick={generatePassword}
							className={`text-2xl font-medium w-full py-2 mb-2 rounded bg-[#393E46] ${styles.drzz21text} drop-shadow-2xl`}
						>
							Generate Password
						</button>
					</div>
					<div className='w-full bg-[#393E46] mb-2 px-2 py-2 rounded flex justify-center flex-col'>
						<div className={`text-center text-2xl font-bold ${styles.drzz21text}`}>
							Password length: {configPassword.length}
						</div>
						<div>
							<input
								value={configPassword.length}
								onInput={onInputPass}
								className='w-full mb-3'
								type='range'
								id='vol'
								name='length'
								min='8'
								max='100'
							/>
						</div>
					</div>
					<div className='box-border flex space-x-2 mb-3'>
						<button
							disabled={!disable && configPassword.upperCase}
							onClick={onInputPass}
							name='upperCase'
							className={`text-2xl font-medium   box-border w-1/2 rounded bg-[#393E46] ${
								configPassword.upperCase ? styles.drzz21text : styles.drzz21textDisabled
							} drop-shadow-2xl`}
						>
							Uppercase
						</button>
						<button
							disabled={!disable && configPassword.lowerCase}
							onClick={onInputPass}
							name='lowerCase'
							className={`text-2xl font-medium   box-border w-1/2 rounded bg-[#393E46] ${
								configPassword.lowerCase ? styles.drzz21text : styles.drzz21textDisabled
							} drop-shadow-2xl`}
						>
							Lowercase
						</button>
					</div>
					<div className='box-border flex space-x-2'>
						<button
							disabled={!disable && configPassword.numbers}
							onClick={onInputPass}
							name='numbers'
							className={`text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46]  ${
								configPassword.numbers ? styles.drzz21text : styles.drzz21textDisabled
							} drop-shadow-2xl`}
						>
							Numbers
						</button>
						<button
							disabled={!disable && configPassword.symbols}
							onClick={onInputPass}
							name='symbols'
							className={`text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46] ${
								configPassword.symbols ? styles.drzz21text : styles.drzz21textDisabled
							} drop-shadow-2xl`}
						>
							Symbols
						</button>
					</div>
				</div>
				<div
					className={`flex flex-col break-all justify-center items-center text-2xl rounded bg-[#393E46] mx-2 px-3 w-60 ${styles.drzz21text}`}
				>
					<button
						onClick={() => {
							navigator.clipboard.writeText(password)
						}}
						className={`text-2xl font-medium w-full py-2 my-2 rounded bg-[#222831] ${styles.drzz21text} drop-shadow-2xl`}
					>
						Copy
					</button>

					<span className='mb-2 font-medium'>{password}</span>
				</div>
			</div>
		</div>
	)
}

export default Generator
