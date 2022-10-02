import React from 'react'

const CommandHelp = () => {
	return (
		<div className='flex flex-col items-start'>
			<p>Terminal</p>
			<div className='pl-5 grid grid-cols-[200px_1fr]'>
				<p>clear</p>
				<p>Limpia la consola</p>
			</div>

			<div className='pl-5 grid grid-cols-[200px_1fr]'>
				<p>help</p>
				<p>Ver todos los comandos</p>
			</div>

			<p>Generar contraseña</p>
			<div className='pl-5 grid grid-cols-[200px_1fr]'>
				<p>generate</p>
				<p>Genera una contraseña</p>
			</div>
			{[
				{
					option: '--length=<number>',
					message: 'Especifica la longitud de la contraseña'
				},
				{
					option: '--symbols=<bool>',
					message: 'Especifica si la contraseña puede contener simbolos'
				},
				{
					option: '--numbers=<bool>',
					message: 'Especifica si la contraseña puede contener numeros'
				},
				{
					option: '--case=<string>',
					message: 'Especifica el tipo de caracteres (mixed, upper, lower)'
				}
			].map((e) => {
				return (
					<div key={e.option} className='pl-10 grid grid-cols-[200px_1fr]'>
						<p> {e.option} </p>
						<p> {e.message} </p>
					</div>
				)
			})}
			<br />
		</div>
	)
}

export default CommandHelp
