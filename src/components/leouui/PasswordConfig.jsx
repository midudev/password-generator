import { useState } from 'react'
import { generatePassword } from './helpers/generatePassword'

const DIFF_CONFIG = {
	easy: { abc: true },
	medium: { abc: true, num: true },
	hard: { num: true, symbols: true, abc: true, mayus: true }
}

const MIN_LENGTH = 10
const MAX_LENGTH = 20

const DIFF_BUTTONS = [
	{ label: 'Facil', color: '#6dc26d', value: 'easy' },
	{ label: 'Mediana', color: '#c2c16d', value: 'medium' },
	{ label: 'Dificil', color: '#c26d6d', value: 'hard' }
]

const { initlabel, initconfig } = { initlabel: 'easy', initconfig: { ...DIFF_CONFIG.easy, length: MIN_LENGTH } }

const PasswordConfig = ({ onSubmit }) => {
	const [config, setConfig] = useState(initconfig)
	const [selectedDiff, setSelectedDiff] = useState(initlabel)

	const handleSelectDiff = (value, config) => () => {
		setSelectedDiff(value)
		setConfig(({ length }) => ({ length, ...config }))
	}

	return <>
		<div className='password-config'>
			<div className='password-config__item'>
				<div className='password-config__item-label flex flex-x-between'>
					Longitud:
					<span>{config.length}</span>
				</div>
				<input
					type='range'
					className='wid-100'
					defaultValue={MIN_LENGTH}
					min={MIN_LENGTH}
					max={MAX_LENGTH}
					step={1}
					onChange={({ target: { value } }) =>
						setConfig(c => ({ ...c, length: Number(value) }))
					}
				/>
			</div>
			<div className='password-config__item'>
				<div className='password-config__item-label'>Dificultad:</div>
				<div className='password-config__diff'>
					{DIFF_BUTTONS.map(({ label, color, value }) =>
						<button
							key={value}
							className='btn diff-btn'
							style={
								value === selectedDiff
									? { backgroundColor: color, color: 'var(--primary-color)' }
									: { border: `2px solid ${color}`, color }
							}
							onClick={handleSelectDiff(value, DIFF_CONFIG[value])}
						>
							{label}
						</button>
					)}
				</div>
			</div>
		</div>
		<button
			className='btn generate-password-btn'
			onClick={onSubmit(generatePassword(config))}
		>
			GENERAR CONTRASEÑA
		</button>
	</>
}
export default PasswordConfig