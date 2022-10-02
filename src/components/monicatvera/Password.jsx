import React from 'react'

const Password = ({ password }) => {
	const Clipboard = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			alert('Copiado al portapapeles')
		} else {
			alert(
				'Selecciona la cantidad de caracteres y pulsa generar password para tener una contraseña'
			)
		}
	}

	return (
		<div className='bg-[#605e6b]  md:w-[29.75rem] w-[19.43rem] h-[4rem] md:h-[4.5rem] flex justify-between items-center px-[1rem] py-[1rem] md:px-8 md:py-[1.5rem] my-[2rem]'>
			<div className='text-[#ffffff] text-[1.125rem] leading-[1.485rem] uppercase'>{password}</div>
			<button onClick={Clipboard}>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
					<path d='M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z' />
				</svg>
			</button>
		</div>
	)
}

export default Password
