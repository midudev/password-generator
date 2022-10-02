import React, { useState } from 'react'

const useGenerarPass = () => {
	const [longitud, setLongitud] = useState(8)

	const [incluirMayus, setIncluirMayus] = useState(false)
	const [incluirMinus, setIncluirMinus] = useState(true)
	const [incluirNumeros, setIncluirNumeros] = useState(false)
	const [incluirSimbolos, setIncluirSimbolos] = useState(false)

	const [usingDate, setusingDate] = useState(false)

	const [password, setPassword] = useState('')

	const activarBaseFecha = () => {
		setusingDate(!usingDate)
		setIncluirMayus(false)
		setIncluirMinus(false)
		setIncluirNumeros(false)
		setIncluirSimbolos(false)
	}

	const abecedarioMayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
	const abecedarioMinusculas = 'abcdefghijklmnñopqrstuvwxyz'
	const numbers = '0123456789'
	const symbols = '+-_=[]{}"/<>.:$%&€@()¡!¿?*'

	const generarPassword = () => {
		if (usingDate) {
			const random = Math.random().toString(36).substring(2)
			const fecha = usingDate.now().toString(36)
			setPassword(random + fecha)
			return
		}

		let opcionesAUsar = []

		let generatedPassword = ''

		const opcionesAIncluir = [abecedarioMayusculas, abecedarioMinusculas, numbers, symbols]

		const statesPosibles = [incluirMayus, incluirMinus, incluirNumeros, incluirSimbolos]

		statesPosibles.forEach((opcion, index) => {
			if (opcion) {
				opcionesAUsar.push(opcionesAIncluir[index])
			}
		})
		for (let i = 0; i < longitud; i++) {
			let finalOption = opcionesAUsar[Math.floor(Math.random() * opcionesAUsar.length)]
			generatedPassword += finalOption[Math.floor(Math.random() * finalOption.length)]
		}
		setPassword(generatedPassword)
	}

	const copiarClipboard = () => {
		navigator.clipboard.writeText(password)
	}

	const INPUTS_INFORMATION = [
		{
			for: 'uppercase',
			value: incluirMayus,
			setvalue: setIncluirMayus,
			text: 'Incluir letras mayúsculas'
		},
		{
			for: 'lowercase',
			value: incluirMinus,
			setvalue: setIncluirMinus,
			text: 'Incluir letras minúsculas'
		},
		{ for: 'numbers', value: incluirNumeros, setvalue: setIncluirNumeros, text: 'Incluir números' },
		{
			for: 'symbols',
			value: incluirSimbolos,
			setvalue: setIncluirSimbolos,
			text: 'Incluir símbolos'
		}
	]

	return {
		INPUTS_INFORMATION,
		copiarClipboard,
		generarPassword,
		activarBaseFecha,
		setLongitud,
		incluirMayus,
		incluirMinus,
		incluirNumeros,
		incluirSimbolos,
		usingDate,
		setusingDate,
		password,
		longitud
	}
}

export default useGenerarPass
