import './Button.css'
const Button = ({ type = 'default', children, onClick, disabled }) => {
	return (
		<button className={disabled ? 'disabled' : type} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
