import { useCallback, useEffect, useState } from 'preact/hooks'
import Slider from '@components/jpaddeo/partials/Slider.jsx'
import CharOptions from '@components/jpaddeo/partials/CharOptions.jsx'

const CHARS = {
	LETTERS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	NUMBERS: '0123456789',
	SYMBOLS: '!@#$%^&*()'
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
			<div className='flex items-center justify-center bg-gray-600 p-4 rounded-lg gap-4'>
				<Slider value={passwordLength} onInput={handlePasswordLength} />
				<CharOptions CHARS={CHARS} options={options} onChange={handleOptionChange} />
			</div>
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
		</section>
	)
}
