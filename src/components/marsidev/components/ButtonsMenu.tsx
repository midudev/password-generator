/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { Button } from '@components/marsidev/components/Button'
import { usePassword } from '@components/marsidev/context/PasswordContext'

export const ButtonsMenu: Component = () => {
	const { generate, onCopy } = usePassword()

	return (
		<div class='flex flex-row gap-2'>
			<Button caption='Generar' handleClick={generate} />
			<Button caption='Copiar' handleClick={onCopy} />
		</div>
	)
}
