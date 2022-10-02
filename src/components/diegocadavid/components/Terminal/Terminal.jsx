import React from 'react'
import InputTerminal from './InputTerminal'

const Terminal = () => {
	return (
		<div className='text-slate-100 p-4'>
			<div>
				<p>Terminal Password [Version 9.22.2006]</p>
				<p>Creado por DiegoCadavid</p>
				<p>Usa el comando 'help' para ver todos los comandos.</p>
			</div>
			<br />
			<InputTerminal />
		</div>
	)
}

export default Terminal
