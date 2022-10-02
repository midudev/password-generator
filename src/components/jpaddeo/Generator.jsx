import { useCallback, useEffect, useState } from 'preact/hooks'

const CHARS = {
	LETTERS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	NUMBERS: '0123456789',
	SYMBOLS: '!@#$%^&*()'
}

function Slider({ value, onInput }) {
	return (
		<div>
			<label>{value}</label>
			<input type='range' value={value} onInput={onInput} />
		</div>
	)
}
export default function Generator() {
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(40)
	const [options, setOptions] = useState(['LETTERS'])
	const [copying, setCopying] = useState(false)

	const generatePassword = useCallback(() => {
		let password = ''
		const charsSelected = options.map((option) => CHARS[option]).join()
		for (let i = 0; i <= passwordLength; i++) {
			let rnd = Math.floor(Math.random() * charsSelected.length)
			password += charsSelected.substring(rnd, rnd + 1)
		}
		return password
	}, [options, passwordLength])

	const handleOptionChange = (e) => {
		if (e.target.value && !options.includes(e.target.value)) {
			setOptions((prevOptions) => [...prevOptions, e.target.value])
		} else {
			setOptions((prevOptions) => prevOptions.filter((opt) => opt !== e.target.value))
		}
	}

	const handleCopy = (e) => {
		setCopying(true)
		navigator.clipboard.writeText(generatedPassword).then(
			() => {
				setCopying(false)
				console.log('Copiado')
			},
			() => {
				setCopying(false)
				console.log('No Copiado')
			}
		)
	}

	const handlePasswordLength = (e) => {
		setPasswordLength(e.target.value)
	}
	const handleRefresh = (e) => {
		setGeneratedPassword(generatePassword())
	}

	useEffect(() => {
		setGeneratedPassword(generatePassword())
	}, [passwordLength, options])

	return (
		<section className='flex flex-col items-center justify-center gap-4'>
			<h1 className='text-white text-2xl uppercase mt-2'>Password Generator</h1>
			<span className='bg-gray-900 dark:bg-gray-200 p-6 rounded-xl'>{generatedPassword}</span>
			<div>
				<div className='flex items-center justify-between gap-4'>
					<button onClick={handleRefresh} className='bg-gray-400 text-white px-4 py-2 rounded-2xl'>
						Refresh
					</button>
					<button
						onClick={handleCopy}
						className='bg-blue-400 text-white px-4 py-2 rounded-2xl'
						disabled={copying}
					>
						{copying ? 'Copiando...' : 'Copiar'}
					</button>
				</div>
			</div>
			<div className='flex items-center justify-center bg-gray-600 p-4 rounded-lg gap-4'>
				<Slider value={passwordLength} onInput={handlePasswordLength} />
				<div className='flex items-center gap-2'>
					{Object.keys(CHARS).map((char) => (
						<>
							<input
								key={char}
								id={char}
								type='checkbox'
								value={char}
								onChange={handleOptionChange}
								checked={options.includes(char)}
								className='w-4 h-4 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							/>
							<label
								htmlFor={char}
								className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-200'
							>
								{char}
							</label>
						</>
					))}
				</div>
			</div>
		</section>
	)
}
