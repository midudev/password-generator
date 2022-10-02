import { useEffect, useState } from 'react'
import './style.css'

const PasswordInput = ({ password, placeholder }) => {

	const handleCopyPassword = () => {
		if (password) {
			navigator.clipboard.writeText(password);
			setToolTipText('Copied')
		}
	}

	const [toolTipText, setToolTipText] = useState('Copy to clipboard')

	useEffect(() => {
		setToolTipText('Copy to clipboard')
	}, [password])

	return (
		<div className='password-input-container'>
			<input
				type="text"
				placeholder={placeholder}
				className="password-input"
				value={password}
				disabled
			/>
			<div className='tooltip'>
				<button
					type="button"
					onClick={handleCopyPassword}
				>
					<span className="tooltiptext">{toolTipText}</span>
					<span className='icon'></span>
				</button>
			</div>
		</div>
	)
}

export default PasswordInput