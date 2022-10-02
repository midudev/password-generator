import React from 'react'
import CopyButton from './CopyButton'
import Range from './Range'
import useGeneratePassword from './hooks/useGeneratePassword'

import styles from './styles/neumorphism.module.css'


const MIN_LENGTH = 5
const MAX_LENGTH = 16
const ALERT_TIMEOUT = 3000

function PasswordContainer () {
	const [passwordLength, setPasswordLength] = React.useState(MIN_LENGTH)
	const [copied, setCopied] = React.useState(false)
	const [password, generatePassword] = useGeneratePassword()

	const handleGenerate = () => {
		generatePassword(passwordLength)
	}

	const handleCopy = async () => {
		if (!copied) {
			await navigator.clipboard.writeText(password)
			setCopied(true)

			setTimeout(() => setCopied(false), ALERT_TIMEOUT)
		}
	}

	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center'>
			{copied && <div className='absolute top-14 bg-green-400 p-4 rounded-xl text-gray-700 m-4 animate-bounce'>¡Contraseña copiada al portapapeles!</div>}
			<div className='flex flex-col gap-4 justify-center bg-gray-100 p-8 rounded-xl border-2 border-white w-2/5 '>
				<div className='flex justify-center items-center gap-4'>
					<input
						type='text'
						readOnly
						value={password || 'Ajusta opciones y pulsa GENERAR'}
						className={`p-4 rounded-full bg-gray-100 focus:outline-none flex-1 text-gray-700 font-bold ${styles.neuActive}`}
					/>
					<CopyButton handleCopy={handleCopy} disabled={!password} />
				</div>
				<div className='flex flex-col justify-center gap-4'>
					<Range min={MIN_LENGTH} max={MAX_LENGTH} current={passwordLength} handleChange={(value) => setPasswordLength(value)} />
				</div>
				<button onClick={handleGenerate} className={`p-4 rounded-full bg-gray-100 text-gray-700 font-bold ${styles.neuShadow}`}>
					GENERAR
				</button>
			</div>
		</div>
	)
}

export default PasswordContainer
