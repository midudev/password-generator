import { useEffect, useState } from 'react'
import generateRandomPassword from './PasswordGeneratorService'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [length, setLength] = useState(12)
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		generatePassword()
	}, [])

	const generatePassword = () => {
		setCopied(false)
		setPassword(generateRandomPassword(length))
	}

	const passwordLenghtChange = (event) => {
		setLength(event.target.value)
		generatePassword()
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(password)
		setCopied(true)
	}

	return (
		<div className='flex h-full'>
			<div className='m-auto w-5/6 md:w-1/2 lg:w-1/3'>
				{copied &&
				<p className='w-3/4 mb-10 p-2 text-purple-800 font-bold text-center bg-purple-300 border-l-4 border-l-purple-700 rounded-r'>
					¡Password copiado!
				</p>
				}
				<div className='w-full h-10 mb-5'>
					<input type='text' name='password' id='password' className='h-full w-3/4 p-4 rounded text-center bg-gray-100' readOnly value={password} />
					<button className='ml-5 text-gray-100 underline' onClick={copyPassword}>Copiar</button>
				</div>
				<div className='h-10 mb-5'>
					<input type='range' min='6' max='30' step='1' className='w-3/4 h-2 bg-gray-100 rounded-lg accent-purple-800 appearance-none cursor-pointer dark:bg-gray-700' value={length} onChange={passwordLenghtChange} />
					<span className='h-10 w-1/4 pl-5 text-gray-100'>{length}</span>
				</div>
				<button className='w-3/4 h-10 rounded bg-purple-800 text-gray-200 font-semibold' onClick={generatePassword}>Generar contraseña</button>
			</div>
		</div>
	)
}

export default PasswordGenerator