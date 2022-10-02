import React, { useEffect, useState } from 'react'
import IconClosedEye from '../../icons/IconClosedEye'
import IconCopy from '../../icons/IconCopy'
import IconEye from '../../icons/IconEye'
import ProgressBar from './ProgressBar'

const whitelistCharUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const whitelistCharlower = 'abcdefghijklmnopqrstuvwxyz'
const whitelistNumbers = '0123456789'
const whitelistSymbols = '~!@-#$'

const defaultConfig = [
	{
		name: 'size',
		value: 10
	},
	{
		name: 'symbols',
		value: true
	},
	{
		name: 'numbers',
		value: true
	},
	{
		name: 'case',
		value: 'mixed'
	}
]

const CommandGenerate = ({ config = [] }) => {
	const [loading, setLoading] = useState(true)
	const [password, setPassword] = useState('contraseña')
	const [showPassword, setShowPassword] = useState(false)
	const [clipboardPassword, setClipboardPassword] = useState(false)

	const handleFinishLoading = () => {
		setLoading(false)
	}

	const toggleShow = () => {
		setShowPassword(!showPassword)
	}

	const copyPassword = () => {
		if (!navigator.clipboard) {
			alert('Clipboard api not avalilable')
			return
		}

		navigator.clipboard
			.writeText(password)
			.then(() => {
				setClipboardPassword(true)
			})
			.catch(() => {
				console.log('Sucedio un error 😢')
			})

		setClipboardPassword(true)
		console.log(`${password} Copiada`)
	}

	// Generamos contraseña segura
	useEffect(() => {
		// Convertimos la configuracion array en un objecto
		const configObj = {}

		// Le definimos el valor inicial
		defaultConfig.forEach((c) => {
			configObj[c.name] = c.value
		})

		// Re-escribimos los valores por los valores de los props
		config.forEach((c) => {
			configObj[c.name] = c.value
		})

		let arrayChars = []

		// Definimos el case
		switch (configObj.case) {
			case 'mixed':
				arrayChars = [...arrayChars, ...whitelistCharUpper, ...whitelistCharlower]
				break
			case 'upper':
				arrayChars = [...arrayChars, ...whitelistCharUpper]
				break

			case 'upper':
				arrayChars = [...arrayChars, ...whitelistCharlower]
				break

			default:
				arrayChars = [...arrayChars, ...whitelistCharUpper, ...whitelistCharlower]
				break
		}

		// Definimos los simbolos
		if (configObj.symbols) {
			arrayChars = [...arrayChars, ...whitelistSymbols]
		}

		// Definimos los numeros
		if (configObj.numbers) {
			arrayChars = [...arrayChars, ...whitelistNumbers]
		}
		// const randPassword =new Array(config.size).fill(whitelistCharlower).map((x) =>  { return x[Math.floor(Math.random() * x.length)] }).join('');
		const randPassword = new Array(configObj.size)
			.fill(arrayChars)
			.map((x) => {
				return x[Math.floor(Math.random() * x.length)]
			})
			.join('')
		console.log(randPassword)

		setPassword(randPassword)
	}, [])

	return (
		<div>
			<ProgressBar handleFinish={handleFinishLoading} />
			{!loading && (
				<>
					<br />
					<div className='flex gap-3'>
						<p>Contraseña: {showPassword ? password : '*'.repeat(password.length)}</p>
						<button className='flex items-center gap-1' onClick={toggleShow}>
							[{!showPassword ? <IconEye /> : <IconClosedEye />}]
						</button>
						<button onClick={copyPassword}>
							<IconCopy />
						</button>
					</div>
					{clipboardPassword && <p> Contraseña Copiada en el portapapeles </p>}
					<br />
				</>
			)}
		</div>
	)
}

export default CommandGenerate
