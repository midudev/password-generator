import React, { useEffect, useState } from 'react'

const MAYUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MINUSCULAS = 'abcdefghijklmnopqrstuvwxyz'
const NUMEROS = '0123456789'
const SIMBOLOS = '!@#$%^&*_-+='
export const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(8)
	const [filters, setFilters] = useState({
		uppercase: true,
		lowercase: false,
		numbers: false,
		symbols: false
	})
	const [password, setPassword] = useState('')

	function handleChangeLength ({ target }) {
		setPasswordLength(target.value)
	}

	useEffect(() => {
		generatePassword()
	}, [passwordLength, filters])

	function generatePassword () {
		let chars = ''
		chars += filters.uppercase ? MAYUSCULAS : ''
		chars += filters.lowercase ? MINUSCULAS : ''
		chars += filters.numbers ? NUMEROS : ''
		chars += filters.symbols ? SIMBOLOS : ''

		let randomstring = ''
		for (let i = 0; i < passwordLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			randomstring += chars.substring(randomNumber, randomNumber + 1)
		}
		setPassword(randomstring)
	}

	return (
		<div className='grid justify-items-center'>
			<ul>Agregar:
				<li>Mayusculas: <input type='checkbox' defaultChecked={filters.uppercase} name='uppercase' onClick={() => setFilters({ ...filters, uppercase: !filters.uppercase })}/></li>
				<li>Minúsculas: <input type='checkbox' defaultChecked={filters.lowercase} name='lowercase' onClick={() => setFilters({ ...filters, lowercase: !filters.lowercase })}/></li>
				<li>Números: <input type='checkbox' defaultChecked={filters.numbers} name='numbers' onClick={() => setFilters({ ...filters, numbers: !filters.numbers })}/></li>
				<li>Símbolos: <input type='checkbox' defaultChecked={filters.symbols} name='symbols' onClick={() => setFilters({ ...filters, symbols: !filters.symbols })}/></li>
			</ul>

			<span>
				8 <input
					max='64'
					min='8'
					onChange={handleChangeLength}
					type='range'
					value={passwordLength}
				/> 64
			</span>
			Selected {passwordLength}
			<span>Password: {password || 'por favor seleccioná al menos un filtro'}</span>
			<button className='bg-sky-500 hover:bg-sky-700 rounded-md p-1' onClick={generatePassword}
			>Generate</button>
		</div>
	)
}