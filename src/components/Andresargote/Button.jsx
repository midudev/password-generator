export function Button({ type, onClick }) {
	return (
		<button
			className='mt-3 text-center border w-full bg-black px-6 py-3 rounded font-mono uppercase text-1xl text-white hover:bg-white hover:border hover:text-black transition hover:ease-in duration-200'
			aria-label='Generate password'
			type={type}
			onClick={onClick}
		>
			Generar contraseña
		</button>
	)
}
