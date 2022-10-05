import { useState } from 'react'
import './style.css'
import SvgCopy from './SvgCopy'
import genPassword from './genPassword'

const PassGenerator = () => {
	const [password, setPassword] = useState('')
	const [configPassword, setConfigPassword] = useState({
		length: 4,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false
	})

	const handlerGenerateButton = () => {
		console.log(
			'🚀 ~ file: passGenerator.jsx ~ line 17 ~ handlerGenerateButton ~ configPassword',
			configPassword
		)
		setPassword(genPassword(configPassword))
	}
	return (
		<section className='password-container'>
			<h1 className='title'>Passoword Generator</h1>
			<div className='password'>
				<p>{password}</p>
				<SvgCopy fill='#35e679' />
			</div>
			<div className='password-confing'>
				<div className='length'>
					<p>Character length</p>
					<span>{configPassword.length}</span>
				</div>
				<div className='slide-length'>
					<input
						type='range'
						min='4'
						max='30'
						value={configPassword.length}
						className='slider'
						onChange={(e) => setConfigPassword({ ...configPassword, length: e.target.value })}
						id='length'
					/>
				</div>
				<section>
					<div className='password-details'>
						<input
							type='checkbox'
							name='uppercase'
							onChange={() =>
								setConfigPassword({ ...configPassword, uppercase: !configPassword.uppercase })
							}
						/>
						<label htmlFor='uppercase'>Include Uppercase Letters</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='lowercase'
							onChange={() =>
								setConfigPassword({ ...configPassword, lowercase: !configPassword.lowercase })
							}
						/>
						<label htmlFor='lowercase'>Include Lowercase Letters</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='numbers'
							onChange={() =>
								setConfigPassword({ ...configPassword, numbers: !configPassword.numbers })
							}
						/>
						<label htmlFor='numbers'>Include Numbers</label>
					</div>
					<div className='password-details'>
						<input
							type='checkbox'
							name='symbols'
							onChange={() =>
								setConfigPassword({ ...configPassword, symbols: !configPassword.symbols })
							}
						/>
						<label htmlFor='symbols'>Include Symbols</label>
					</div>
				</section>
				<button className='btn-generate' onClick={handlerGenerateButton}>
					Generate
				</button>
			</div>
		</section>
	)
}

export default PassGenerator
