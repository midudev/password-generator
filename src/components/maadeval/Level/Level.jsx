import { useEffect, useRef, useState } from 'preact/hooks'
import style from './Level.module.css'

const Levels = () => {
	const [currentLevel, setCurrentLevel] = useState(MIN_LEVEL)
	const [password, setPassword] = useState({
		copied: false,
		loading: false,
		value: ''
	})
	const setTimerRefId = useRef(null)

	const onCopyPassword = () => handleCopyPassword(password.value, setPassword)

	const onCreatePassword = () =>
		handlePassword(currentLevel, setPassword, {
			setTimerRefId
		})

	useEffect(() => {
		if (!setTimerRefId.current) return

		return () => clearTimeout(setTimerRefId.current)
	}, [])

	return (
		<div>
			<p className={style.text}>
				{'>>'} Seleccionar dificultad :: [{' '}
				<span className={style.difficultText}>{currentLevel}</span> ]
			</p>
			<section>
				<div className={style.wrapper}>
					{Array.from(new Array(10).keys()).map((key) => (
						<button
							key={`level-${key + MIN_LEVEL}`}
							className={`${style.button} ${key + MIN_LEVEL <= currentLevel ? style.active : ''}`}
							onClick={() => setCurrentLevel(key + MIN_LEVEL)}
						>
							{' '}
						</button>
					))}
				</div>
			</section>
			<button disabled={password.loading} className={style.buttonSubmit} onClick={onCreatePassword}>
				Generar midupassword
			</button>
			<span className={style.divider}></span>
			<section className={style.resultContainer}>
				<p className={style.resultText}>
					{password.loading ? '// Calculate... :[' : password.value}
				</p>
				<button
					className={style.resultCopy}
					disabled={password.loading || !password.value}
					onClick={onCopyPassword}
				>
					<span className={style.resultCopySubtext}>CO</span>
					<span className={style.resultCopySubtext}>PY</span>
				</button>
			</section>
			<figure className={`${style.alert} ${password.copied ? style.copied : ''}`}>
				<p className={style.alertText}>Copiado correctamente :]</p>
				<img src='/maadeval/midu-fine.png' alt='Pixel del emote de MiduFine' />
			</figure>
		</div>
	)
}

const MIN_LEVEL = 4

const handleCopyPassword = (password, setPassword) => {
	navigator.clipboard.writeText(password)

	setPassword((lastValues) => ({
		...lastValues,
		copied: true
	}))
}

const handlePassword = (currentLevel, setPassword, { setTimerRefId }) => {
	const randomPassword = generatePassword(currentLevel)

	setPassword((lastValues) => ({
		...lastValues,
		copied: false,
		loading: true
	}))

	setTimerRefId.current = setTimeout(() => {
		setPassword((lastValues) => ({
			...lastValues,
			value: randomPassword,
			loading: false
		}))
	}, 1000)
}

const generatePassword = (level) => {
	const unit32EmptyArray = new Uint32Array(3)

	const [firstNumber, secondNumber, thirdNumber] = [...crypto.getRandomValues(unit32EmptyArray)]

	const [...ctyptoNumbers] = [
		firstNumber.toString(36),
		secondNumber.toString(36),
		thirdNumber.toString(36)
	]

	const randomPassword = ctyptoNumbers.join('').slice(0, level)

	return randomPassword
}

export default Levels
