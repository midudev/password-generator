import React, { useState } from 'react'

import CliTerminal from './components/cli/CliTerminal'
import WindowTerminal from './components/terminal/WindowTerminal'

import CommandClear from './components/Terminal/commands/CommandClear'
import CommandError from './components/Terminal/commands/CommandError'
import CommandGenerate from './components/terminal/commands/CommandGenerate'
import CommandHelp from './components/terminal/commands/CommandHelp'

const parseCommand = (commandName = '') => {
	//Obtenemos el comando
	const commandRegex = /^\w+/gi
	const command = (commandName.match(commandRegex) || [null])[0]

	if (!command) {
		return {
			error: true,
			id: Date.now()
		}
	}

	// Obtenemos las opciones
	const optionsRegex = /\-+\w+=\s?"?\w+"?/gi
	const optionsRaw = commandName.match(optionsRegex) || []
	const optionsList = optionsRaw.map((o) => {
		return {
			name: o.match(/\w+/gi)[0],
			value: o.match(/\w+/gi)[1]
		}
	})

	return {
		name: command,
		options: optionsList,
		id: Date.now()
	}
}

const listDocCommads = [
	{
		name: 'help',
		options: [],
		info: 'Muestra todos los comandos',
		Component: CommandHelp
	},
	{
		name: 'clear',
		options: [],
		info: 'Limpia la consola',
		Component: CommandClear
	},
	{
		name: 'generate',
		options: [
			{ name: 'size', info: 'Especifica la longitud de la contraseña', type: 'number' },
			{
				name: 'symbols',
				info: 'Especifica si la contraseña puede contener simbolos',
				type: 'bool'
			},
			{ name: 'numbers', info: 'Especifica si la contraseña puede contener numeros', type: 'bool' },
			{
				name: 'case',
				info: 'Especifica el tipo de caracteres (mixed, upper, lower)',
				type: 'string'
			}
		],
		info: 'Genera una contraseña',
		Component: CommandGenerate
	}
]

const App = () => {
	const [commands, setCommands] = useState([])

	const addComponentCommand = (command, Component) => {
		return (
			<div key={command.id}>
				<p> {`C:\\Users\\admin> ${command.raw}`} </p>
				{Component}
			</div>
		)
	}

	const addCommand = (commandName) => {
		// Le damos formato al comando
		const command = parseCommand(commandName)

		// Validamos si introdujo un comando
		if (command?.error) {
			setCommands([
				...commands,
				addComponentCommand(
					{ name: commandName, raw: commandName, id: command.id },
					<CommandError />
				)
			])
			console.log('Comando invalido')
			return false
		}

		// Vemos si el comando esta registrado
		if (
			!listDocCommads
				.map((c) => {
					return c.name
				})
				.includes(command.name)
		) {
			setCommands([
				...commands,
				addComponentCommand(
					{ raw: commandName, ...command },
					<CommandError command={command.name} />
				)
			])
			console.log('El comando no existe')
			return false
		}

		// Validamos los comandos
		if (command.options.length > 0) {
			const indexDoc = listDocCommads.map((c) => c.name).indexOf(command.name)

			const commandsNameInvalid = []

			command.options.forEach((e) => {
				// Verificamos si existe esa opcion
				if (!listDocCommads[indexDoc].options.map((c) => c.name).includes(e.name)) {
					commandsNameInvalid.push(e.name)
					return false
				}

				// Se validan los tipos ded opcion
				const DocOption =
					listDocCommads[indexDoc].options[
						listDocCommads[indexDoc].options.map((c) => c.name).indexOf(e.name)
					]
				switch (DocOption.type) {
					case 'string':
						break

					case 'bool':
						// Verificamos si es un boleano
						if (!(e.value == 'true' || e.value == 'false')) {
							commandsNameInvalid.push(e.name)
							return false
						}

						;(e.value == e.value) == 'true' ? true : false
						break

					case 'number':
						// Verificamos si es un numero
						if (!Number(e.value)) {
							commandsNameInvalid.push(e.name)
							return false
						}

						e.value = Number(e.value)
						break
				}
			})

			commandsNameInvalid.forEach(() => {
				setCommands([
					...commands,
					addComponentCommand(
						{ raw: commandName, ...command },
						<CommandError option={commandsNameInvalid} />
					)
				])
			})
		}

		// ENVIAMOS EL COMANDO
		const DocCommands =
			listDocCommads[
				listDocCommads
					.map((c) => {
						return c.name
					})
					.indexOf(command.name)
			]

		const ComponentCommand = DocCommands.Component

		// Otros componentes
		setCommands([
			...commands,
			addComponentCommand(
				{ raw: commandName, ...command },
				<ComponentCommand
					key={command.id}
					config={command.options}
					handleReset={() => {
						setCommands([])
					}}
					docs={listDocCommads}
				/>
			)
		])
	}

	return (
		<div className='p-2  md:p-5 lg:p-12 bg-[#3F3F46] h-screen font-sans relative'>
			<WindowTerminal addCommand={addCommand} commands={commands} />
			<CliTerminal addCommand={addCommand} />
		</div>
	)
}

export default App
