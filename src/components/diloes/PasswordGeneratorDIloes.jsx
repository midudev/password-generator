import { useState } from 'react'
import CopyIcon from './components/CopyIcon'
import style from './styles.module.css'

const PasswordGeneratorDiloes = () => {
	const [pass, setPass] = useState('asRbnf2hj5;KE')
	const [rangeSize, setRangeSize] = useState(12)

	const UPPERLETTERS = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'W',
		'X',
		'Y',
		'Z'
	]
	const LOWERLETTERS = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	]
	const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	const SYMBOLS = ['-', '+', '*', '&', '$', '#', '?', '!']

	const allChars = [...UPPERLETTERS, ...LOWERLETTERS, ...NUMBERS, ...SYMBOLS]

	const handlePassGenerator = () => {
		const passTemp = []

		for (let i = 0; i <= rangeSize; i++) {
			const randomPosition = Math.floor(Math.random() * allChars.length)
			const char = allChars[randomPosition]
			passTemp.push(char)
		}

		const newPass = passTemp.join('')
		setPass(newPass)
	}

	const handleCopy = () => {
		pass && navigator.clipboard.writeText(pass)
		alert('Contraseña copiada')
	}

	const handleRange = (e) => {
		setRangeSize(parseInt(e.target.value))
	}

	return (
		<div className={style.main}>
			<h2 className={style.h2}>Generador de contraseña</h2>

			<div className={style.box}>
				<div className={style.pass}>
					<span>{pass}</span>
					<button onClick={handleCopy}>
						<CopyIcon />
					</button>
				</div>

				<input
					className={style.input}
					type='range'
					min='6'
					max='20'
					step='1'
					onChange={handleRange}
					value={rangeSize}
				/>
				<p className={style.p}>
					Tamaño de contraseña: <span>{rangeSize}</span>
				</p>

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button className={style.button} onClick={handlePassGenerator}>
						Generar Contraseña
					</button>
				</div>
			</div>
			<p className={style.dev}>Desarrollado por Diloes moviendo las manitas ♡</p>
		</div>
	)
}

export default PasswordGeneratorDiloes
