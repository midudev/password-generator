import React, { useState } from 'react'
import './styles/generatorStyles.css'
import IconCopy from './icons/IconCopy'
import { capitalLetters, lowercaseLetters, numbers, simbols } from './utils/characters'

const charactersPass = [...capitalLetters, ...lowercaseLetters, ...numbers, ...simbols]

const PassGenerator = () => {
	const [pass, setPass] = useState('')
	const [levelPass, setLevelPass] = useState(0)
	const [active, setActive] = useState(false)

	const createPassword = () => {
		setPass(
			charactersPass
				.sort(() => Math.random() - 0.5)
				.slice(0, levelPass)
				.join('')
		)
	}

	const copyPassword = () => {
		navigator.clipboard.writeText(pass)
		console.log(pass.length)
		if (pass.length > 1) {
			setActive(true)
			setTimeout(() => {
				setActive(false)
			}, 2000)
		}
	}

	const lengthPass = (event) => {
		setLevelPass(event.target.value)
	}

	return (
		<>
			{active && (
				<div className='caraje-notification'>
					<h3 className='caraje-h3'>¡¡¡Copiado!!!</h3>
				</div>
			)}
			<div className='caraje-screen'>
				<div className='caraje-cardpass'>
					<header className='caraje-header'>
						<h1 className='caraje-h1'>Password Generator</h1>
					</header>
					<main className='caraje-generator'>
						<div className='caraje-groupkey'>
							<input
								className='caraje-key'
								type='text'
								id='name'
								name='name'
								disabled
								value={pass}
							/>
							<button onClick={copyPassword} className='caraje-copy'>
								<IconCopy fill='#0068fa' />
							</button>
						</div>
						<div className='caraje-groupkey'>
							<input
								className='caraje-slide'
								type='range'
								min='0'
								max='20'
								step='1'
								value={levelPass}
								onChange={lengthPass}
							/>
							<h2 className='caraje-h2'>{levelPass}</h2>
						</div>
						<button onClick={createPassword} className='caraje-btn'>
							Generar Password
						</button>
					</main>
				</div>
			</div>
		</>
	)
}

export default PassGenerator
