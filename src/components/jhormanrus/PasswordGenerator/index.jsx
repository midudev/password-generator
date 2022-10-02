import React, { useRef, useState } from 'react'
import Card from '../Card'
import Slider from '../Slider'
import Button from '../Button'
import SvgCopy from '../svg/SvgCopy'

const PasswordGenerator = () => {
	const passwordRef = useRef(null)
	const [length, setLength] = useState(8)
	const [password, setPassword] = useState('')

	const handleSlider = (event) => {
		setLength(event.target.value)
	}
	
	const generatePassword = () => {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
		let password = ''
		for (let i = 0; i < length; i++) {
			password += characters.charAt(Math.floor(Math.random() * characters.length))
		}
		setPassword(password)
	}

	const copyToClipboard = () => {
		const password = passwordRef.current.value
		navigator.clipboard.writeText(password)
		alert('Copiado al portapapeles')
	}

	return (
		<>
			<Card>
				<div className="flex flex-col">
					<Slider value={length} onChange={handleSlider} className="mb-6" />
					<Button onClick={generatePassword}>Generar contraseña</Button>
				</div>
			</Card>
			{password && (
				<Card className="text-white font-bold mt-8 cursor-pointer select-all" onClick={copyToClipboard}>
					<small className='text-slate-100 leading-3'>Contraseña</small>
					<div className='text-xl flex items-center gap-3'>
						<data ref={passwordRef} value={password}>{password}</data>
						<SvgCopy fill="white" />
					</div>
				</Card>
			)}
		</>
	)
}

export default PasswordGenerator
