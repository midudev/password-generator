
export const Button = ({ children, action, className }) => {
	return (
		<button onClick={action} className={className}>
			{children}
		</button>
	)
}
