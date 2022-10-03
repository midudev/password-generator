import useGenerarPass from './hooks/usePassword'
import Button from './Button'
import './styles.css'
import InputRange from './InputRange/InputRange'
import Message from './Message'
import { copyToClipboard } from './utils'
const Solution = () => {
	const {
		password,
		generateRandomPassword,
		setPasswordLength,
		passwordLength,
		config,
		notificaction,
		setNotification
	} = useGenerarPass()
	const { passwordRange } = config
	return (
		<main className='passwordGenerator__container'>
			<h1>Password Generator</h1>
			<hr />
			<div className='copyPassword__container'>
				<input readOnly className='passwordGenerated' placeholder='Contraseña' value={password} />
				<Button
					onClick={() => {
						copyToClipboard(password, setNotification(true))
						setTimeout(() => {
							setNotification(false)
						}, 3000)
					}}
					disabled={!password}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						viewBox='0 0 16 16'
					>
						<path d='M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z' />
					</svg>
				</Button>
			</div>
			<div className='settings__container'>
				<h3>Configuración</h3>
				<h4>Longitud contraseña:</h4>
				<InputRange
					setPasswordLength={setPasswordLength}
					value={passwordLength}
					min={passwordRange.min}
					max={passwordRange.max}
				/>
				<div className='passwordRange__container'>
					<p>{passwordRange.min}</p>
					<p>{passwordLength}</p>
					<p>{passwordRange.max}</p>
				</div>
			</div>

			<Button type='primary' onClick={generateRandomPassword}>
				<span>Generar contraseña</span>
			</Button>
			<Message visible={notificaction}>
				<p>Contraseña copiada al portapapeles</p>
			</Message>
		</main>
	)
}

export default Solution
