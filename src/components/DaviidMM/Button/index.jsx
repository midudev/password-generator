const colorClasses = {
	violet:
		'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 bg-[length:200%_200%] bg-[position:0%_0%] hover:bg-[position:100%_100%] hover:text-white transition-all duration-500'
}

const Button = ({ children, className, color = 'violet', onClick }) => {
	return (
		<button
			className={
				(className ? className + ' ' : '') +
				colorClasses[color] +
				' ' +
				' font-semibold px-4 py-2 w-fit rounded-lg'
			}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
