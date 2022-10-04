import React, { useEffect } from 'react'

const CommandError = ({ command, option = [] }) => {
	return (
		<div>
			{command && option.length > 0 && (
				<>
					<p className='text-red-500'>Comando invalido ¬ _¬</p>
					<p> utilize el comando 'help' para ver todos los comandos disponibles </p>
					<br />
				</>
			)}

			{command && (
				<>
					<p className='text-red-500'>
						{command} : El termino '{command}' no se reconoce como un comando.
					</p>
					<p> utilize el comando 'help' para ver todos los comandos disponibles </p>
					<br />
				</>
			)}

			{option.length > 0 && (
				<>
					{option.map((e) => {
						return (
							<div key={e}>
								<p className='text-red-500'>
									{e} : Error en el parametro '{e}'.
								</p>
							</div>
						)
					})}

					<p> utilize el comando 'help' para ver todos los comandos disponibles </p>
					<br />
				</>
			)}
		</div>
	)
}

export default CommandError
