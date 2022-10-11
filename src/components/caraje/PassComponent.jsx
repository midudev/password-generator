import React from 'react'
import IconCopy from './icons/IconCopy'

const PassComponent = ({
	pass,
	copyPassword,
	levelPass,
	lengthPass,
	selections,
	witchUppercase,
	witchNumbers,
	witchspecials,
	createPassword
}) => {
	return (
		<div className='caraje-screen'>
			<div className='caraje-cardpass'>
				<header className='caraje-header'>
					<h1 className='caraje-h1'>Password Generator</h1>
				</header>
				<main className='caraje-generator'>
					<div className='caraje-groupkey'>
						<input className='caraje-key' type='text' id='name' name='name' disabled value={pass} />
						<button onClick={copyPassword} className='caraje-copy'>
							<IconCopy fill='#0068fa' />
						</button>
					</div>
					<div className='caraje-groupkey'>
						<input
							className='caraje-slide'
							type='range'
							min='0'
							max='30'
							step='1'
							value={levelPass}
							onChange={lengthPass}
						/>
						<h2 className='caraje-h2'>{levelPass}</h2>
					</div>
					<form className='caraje-selections' onSubmit={selections}>
						<label className='caraje-option'>
							<input type='checkbox' name='mayus' value={witchUppercase} onChange={selections} />{' '}
							Incluir Mayusculas
						</label>
						<label className='caraje-option'>
							<input type='checkbox' name='numbers' value={witchNumbers} onChange={selections} />{' '}
							Incluir numeros
						</label>
						<label className='caraje-option'>
							<input type='checkbox' name='specials' value={witchspecials} onChange={selections} />{' '}
							Incluir caracteres especiales
						</label>
					</form>
					<button onClick={createPassword} className='caraje-btn'>
						Generar Password
					</button>
				</main>
			</div>
		</div>
	)
}

export default PassComponent
