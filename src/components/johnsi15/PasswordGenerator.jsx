import { useState } from 'react'

// prettier-ignore
export default function PasswordGenerator () {
	const [password, setPassword] = useState('')
	const [rangeValue, setRangeValue] = useState(6)

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
		})
		console.log({ randomCharacters })
		return randomCharacters
	}

	function getRandomCharacters (characters) {
		let randomPassword = ''
		for (let i = 0; i < passwordLength; i++) {
		// const newchar = getRandomCharacterFrom(characters)
			if (characters.length === 0) {
				return ''
			}

			const max = characters.length - 1
			const randomCharacterIdx = Math.floor(Math.random() * max)

			randomPassword = randomPassword + characters[randomCharacterIdx]
		}
		console.log(randomPassword)
		return randomPassword
	}

	function generatePassword () {
		const characters = getCharacters()
		return getRandomCharacters(characters)
	}


	const handleChangeRange = (e) => {
		console.log(e.target.value)
		setRangeValue(Number(e.target.value))
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
		setCheckedState({
			...checkedState,
			[name]: checked
		})
	}

	return (
		<section className='PasswordGenerator'>
			<h1>Password Generator</h1>
			<div className='password'>{password}</div>
			<form onSubmit={handleGenerate}>
				<label htmlFor='characterLength'>
					Character length
					<span>{rangeValue}</span>
				</label>
				<input
					type='range'
					id='characterLength'
					value={rangeValue}
					min='1'
					max='30'
					name='characterLength'
					onChange={handleChangeRange}
				/>

				<div className='options'>
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
									className='mr-2 accent-yellow-300'
									checked={checkedState[optionId]}
									onChange={handleChecked}
								/>
								{textOption}
							</label>
						)
					})}
				</div>
				<button type='submit'>Generate</button>
			</form>
		</section>
	)
}
