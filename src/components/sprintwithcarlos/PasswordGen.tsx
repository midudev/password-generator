import React, { useState } from 'react'
import './style.css'
type PasswordGenProps = {
	icon: string
}
const PasswordGen: React.FC<PasswordGenProps> = ({ icon }: PasswordGenProps) => {
	const [length, setLength] = useState<number>(6)
	const [password, setPassword] = useState<string>('Tu nuevo password saldrá aquí')
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const genRandomString = (length: number) => {
		const randomInteger = (min: number, max: number) => {
			return Math.floor(Math.random() * (max - min + 1)) + min
		}

		return [...Array(length)]
			.map(() => {
				const random = randomInteger(33, 124)

				return String.fromCharCode(random)
			})
			.join('')
	}
	const handleGenerate = () => {
		setPassword(genRandomString(length))
		setIsCopied(false)
	}
	const handleClick = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
	}
	return (
		<main id='swc-main'>
			<section id='swc-container'>
				<div id='swc-header'>
					<h1>Generador de passwords</h1>
					<p>Indica la longitud de caracteres</p>
				</div>

				<label htmlFor='swc-slider' id='swc-label'>
					{length}
				</label>
				<input
					type='range'
					id='swc-slider'
					min={1}
					max={32}
					value={length}
					step={1}
					onChange={(e) => setLength(Number(e.target.value))}
				/>

				<div id='swc-genpass-container'>
					<span id='swc-genpass'>{password}</span>
					<div className='swc-row'>
						<button id='swc-button' onClick={() => handleGenerate()}>
							<p>Generar</p>
						</button>

						<button
							id='swc-genpass-button'
							aria-label='copy to clipboard'
							onClick={() => handleClick()}
						>
							<img src={icon} alt='clipboard icon' id='swc-icon' />
							<span id='swc-copy-text'>{!isCopied ? 'Copiar' : '¡Copiado!'}</span>
						</button>
					</div>
				</div>
				<small>
					Creado por{' '}
					<a href='http://sprintwithcarlos.github.io' id='swc-small'>
						Sprint With Carlos
					</a>{' '}
					- 2022
				</small>
			</section>
		</main>
	)
}

export default PasswordGen
