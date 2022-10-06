const Button = ({ handleClick, message }) => {
	return (
		<button
			className='w-56 h-12 bg-gradient-to-r from-[#b4ff39] via-[#40ddff] to-[#7c7fff] text-[#170f1e] text-lg font-bold shadow mt-10 hover:-translate-y-1 transition-all duration-300 rounded'
			onClick={handleClick}
		>
			{message}
		</button>
	)
}

export default Button
