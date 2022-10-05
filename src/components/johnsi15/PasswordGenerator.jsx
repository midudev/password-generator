import { useState } from 'react'
import styles from './PasswordGenerator.module.css'
import CopyIcon from './CopyIcon.jsx'

// prettier-ignore
export default function PasswordGenerator () {
	const [password, setPassword] = useState('Generete a password')
	const [rangeValue, setRangeValue] = useState(12)

	const checkboxOptions = {
		IncludeLowerCaseLetters: true,
		IncludeUpperCaseLetters: true,
		IncludeNumbers: true,
		IncludeSymbols: true
	}

	const [checkedState, setCheckedState] = useState(checkboxOptions)

	const passwordLength = rangeValue

	const getCharacters = () => {
		// let passwordString = ''
		// const IncludeLowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
		const IncludeUpperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const IncludeNumbers = '0123456789'
		const IncludeSymbols = '!@#$%^&*()'
		let randomCharacters = []
		console.log(checkedState)
		Object.keys(checkedState).forEach(option => {
			if (option === 'IncludeLowerCaseLetters' && checkedState[option]) {
				const lowerCaseLetters = IncludeUpperCaseLetters.toLocaleLowerCase()
				randomCharacters = [...lowerCaseLetters]
			}

			if (option === 'IncludeUpperCaseLetters' && checkedState[option]) {
				randomCharacters = [...randomCharacters, ...IncludeUpperCaseLetters]
			}

			if (option === 'IncludeNumbers' && checkedState[option]) {
				randomCharacters = [...randomCharacters, ...IncludeNumbers]
			}

			if (option === 'IncludeSymbols' && checkedState[option]) {
				randomCharacters = [...randomCharacters, ...IncludeSymbols]
			}
		})
		return randomCharacters
	}

	function getRandomCharacters (characters) {
		let randomPassword = ''
		for (let i = 0; i < passwordLength; i++) {
			if (characters.length === 0) {
				return randomPassword
			}

			const max = characters.length
			const randomCharacterIdx = Math.floor(Math.random() * max)

			randomPassword = randomPassword + characters[randomCharacterIdx]
		}
		return randomPassword
	}

	function generatePassword () {
		const characters = getCharacters()
		return getRandomCharacters(characters)
	}


	const handleChangeRange = (e) => {
		const { value } = e.target
		// console.log(e.target.value)
		setRangeValue(Number(value))
	}

	const handleGenerate = (e) => {
		e.preventDefault()
		const password = generatePassword()
		setPassword(password)
	}

	const handleChecked = (e) => {
		const { name, value, checked } = e.target
		console.log(e.target.value)
		console.log(e.target.checked)
		// console.log(checkedState)
		// setCheckedState({
		// 	...checkedState,
		// 	[name]: checked
		// })
		let count = 0
		setCheckedState(prevState => {
			console.log(prevState)
			const entries = Object.entries(prevState)
			entries.forEach(([prop, val]) => {
				if (!val) count++
				if (name === prop && !val) count = 0
			})

			if (count !== 3) {
				return {
					...prevState,
					[name]: checked
				}
			}

			return { ...prevState }
		})
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(password).then(() => {
			console.log('Copying to clipboard was successful!')
		}, (err) => {
			console.error('Could not copy text: ', err)
		})
	}

	return (
		<section className={styles.PasswordGenerator}>
			<h1 className={styles.title}>Password Generator</h1>
			<div className={styles.password}>
				<p>{password}</p>
				<button type='button' onClick={handleCopy} ><CopyIcon /></button>
			</div>
			<form className={styles.form} onSubmit={handleGenerate}>
				<label htmlFor='characterLength' className={styles.characterLength}>
					Character length
					<span>{rangeValue}</span>
				</label>
				<input
					type='range'
					className={styles.inputRange}
					id='characterLength'
					value={rangeValue}
					min='8'
					max='30'
					name='characterLength'
					onChange={handleChangeRange}
				/>

				<div className={styles.options}>
					{Object.keys(checkboxOptions).map((optionId) => {
						// const optionId = option.replaceAll(' ', '')
						const isUpperCase = (letter) => letter === letter.toUpperCase()

						let textOption = ''
						optionId.split('').forEach((currentLetter, index) => {
							if (isUpperCase(currentLetter) && index > 0) { textOption += ' ' }
							textOption += currentLetter
						})
						return (
							<label htmlFor={optionId} key={optionId}>
								<input
									type='checkbox'
									id={optionId}
									name={optionId}
									value={optionId}
									className={styles.inputCheckbox}
									checked={checkedState[optionId]}
									onChange={handleChecked}
								/>
								{textOption}
							</label>
						)
					})}
				</div>
				<button type='submit' className={styles.btnGenerate}>Generate</button>
			</form>
		</section>
	)
}
