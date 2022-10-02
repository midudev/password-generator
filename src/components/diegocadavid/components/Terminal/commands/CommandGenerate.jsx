import React, { useEffect, useState } from 'react'
import IconClosedEye from '../../icons/IconClosedEye'
import IconCopy from '../../icons/IconCopy'
import IconEye from '../../icons/IconEye'
import ProgressBar from './ProgressBar'

const whitelistCharUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const whitelistCharlower = 'abcdefghijklmnopqrstuvwxyz'
const whitelistNumbers = '0123456789'
const whitelistSymbols = '~!@-#$'

const CommandGenerate = ({ config = [], docs = [] }) => {
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
	}

	// Generamos contraseña segura
	useEffect(() => {
		// Opciones predeterminanas
		const configParams = { case: 'mixed', numbers: true, size: 10, symbols: true }

		config.forEach((c) => {
			// Parsear valores
			const docCommand = docs[docs.map((o) => o.name).indexOf('generate')]
			const docOption = docCommand.options[docCommand.options.map((o) => o.name).indexOf(c.name)]

			if (docOption.type == 'number') {
				configParams[c.name] = Number(c.value)
				return
			}

			if (docOption.type == 'bool') {
				configParams[c.name] = c.value == 'true' ? true : false
				return
			}

			configParams[c.name] = c.value
		})

		let arrayChars = []

		// Definimos el case
		switch (configParams.case) {
			case 'mixed':
				arrayChars = [...arrayChars, ...whitelistCharUpper, ...whitelistCharlower]
				break
			case 'upper':
				arrayChars = [...arrayChars, ...whitelistCharUpper]
				break

			case 'lower':
				arrayChars = [...arrayChars, ...whitelistCharlower]
				break

			default:
				arrayChars = [...arrayChars, ...whitelistCharUpper, ...whitelistCharlower]
				break
		}

		// Definimos los simbolos
		if (configParams.symbols) {
			arrayChars = [...arrayChars, ...whitelistSymbols]
		}

		// Definimos los numeros
		if (configParams.numbers) {
			arrayChars = [...arrayChars, ...whitelistNumbers]
		}

		// Generamos lac contraseña
		const randPassword = new Array(configParams.size)
			.fill(arrayChars)
			.map((x) => {
				return x[Math.floor(Math.random() * x.length)]
			})
			.join('')
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
					{clipboardPassword && <p>contraseña capiada en el portapapeles</p>}
					<br />
				</>
			)}
		</div>
	)
}

export default CommandGenerate
