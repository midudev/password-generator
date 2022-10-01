import { useState, useEffect, useRef } from "react";
import { generatePasword, generatePaswordValue } from "../utils";
import Icon from "../icons";

const Generator = ({ chars, length }) => {
	const [password, setValue] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const passwordInput = useRef(null);

	const handleRedo = () => {
		setIsCopied(false)
		new Promise((resolve) => {
			const value = generatePaswordValue(length, chars)
			resolve(value)
		}).then((newPassword) => {
			setValue(newPassword)
			generatePasword(passwordInput.current, newPassword)
		})
	}

	useEffect(() => {
		handleRedo()
	}, [length])

	const handleCopy = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			setIsCopied(true)
		}
	}

	return (
		<div className="text-amber-600 relative flex items-center justify-between">
			<span className="overflow-hidden inline-block whitespace-nowrap" style={{ maxWidth: "80%" }} onClick={handleCopy} ref={passwordInput} id="password" />
			<div className="flex h-6 items-center">
				{isCopied ? <Icon type="check" /> : <Icon type="copy" callback={handleCopy} />}
				<Icon type="redo" callback={handleRedo} />
			</div>
		</div>
	)
}

Generator.defaultProps = {
	chars: "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	length: 12,
}

export default Generator;
