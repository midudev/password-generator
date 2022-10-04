const colorClasses = {
	violet: 'bg-gradient-to-b from-violet-500 via-purple-600 to-purple-800'
}

const ColoredText = ({ children, className, color = 'violet' }) => {
	return (
		<span
			className={
				(className ? className + ' ' : '') +
				'bg-clip-text text-transparent' +
				' ' +
				colorClasses[color]
			}
		>
			{children}
		</span>
	)
}

export default ColoredText
