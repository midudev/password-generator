import React, { useEffect, useState } from 'react'
import IconClosedEye from '../../icons/IconClosedEye'
import IconCopy from '../../icons/IconCopy'
import IconEye from '../../icons/IconEye'
import ProgressBar from './ProgressBar'

const CommandGenerate = ({
	config = {
		length: 10,
		symbols: true,
		numbers: true,
		case: 'mixed'
	}
}) => {
	const [loading, setLoading] = useState(true)
	const [password, setPassword] = useState('contraseña')
	const [showPassword, setShowPassword] = useState(false)
	const [clipboardPassword, setClipboardPassword] = useState(false)

	const handleFinishLoading = () => {
		setLoading(false)
	}

	const toggleShow = () => {
		setShowPassword(!showPassword)
	}

	const copyPassword = () => {
		if (!navigator.clipboard) {
			alert('Clipboard api not avalilable')
			return
		  }

		navigator.clipboard.writeText(password).then(() =>{
			setClipboardPassword(true)
		}).catch( () => {
			console.log('Sucedio un error 😢');
		});

		setClipboardPassword(true)
		console.log(`${password} Copiada`)
	}

	return (
		<div>
			<ProgressBar handleFinish={handleFinishLoading} />
			{!loading && (
				<>
					<br />
					<div className='flex gap-3'>
						<p>Contraseña: {showPassword ? password : '*'.repeat(password.length)}</p>
						<button className='flex items-center gap-1' onClick={toggleShow}>
							[{!showPassword ? <IconEye /> : <IconClosedEye />}]
						</button>
						<button onClick={copyPassword}>
							<IconCopy />
						</button>
					</div>
					{clipboardPassword && <p> Contraseña Copiada en el portapapeles </p>}
					<br />
				</>
			)}
		</div>
	)
}

export default CommandGenerate
