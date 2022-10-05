/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { Button } from '@components/marsidev/components/Button'
import { usePassword } from '@components/marsidev/components/PasswordContext'

export const ButtonsMenu: Component = () => {
	const { generate } = usePassword()

	return (
		<div class='flex flex-row gap-2'>
			<Button caption='Generar' handleClick={generate} />
			<Button caption='Copiar' handleClick={() => console.log('copy!')} />
		</div>
	)
}
