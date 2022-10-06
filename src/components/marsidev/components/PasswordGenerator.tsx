/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { PasswordOptions } from '@components/marsidev/components/PasswordOptions'
import { ButtonsMenu } from '@components/marsidev/components/ButtonsMenu'
import { PasswordPreview } from '@components/marsidev/components/PasswordPreview'
import { PasswordProvider } from '@components/marsidev/context/PasswordContext'
import { ToastProvider } from '@components/marsidev/context/ToastContext'

interface PasswordGeneratorProps {
	initialPassword: string
}

export const PasswordGenerator: Component<PasswordGeneratorProps> = (props) => {
	return (
		<>
			<PasswordProvider initialPassword={props.initialPassword}>
				<div class='flex min-h-[400px] w-full max-w-2xl flex-col items-center justify-center gap-6 rounded-3xl border-4 border-white text-center'>
					<PasswordPreview />
					<ButtonsMenu />
					<PasswordOptions />
				</div>
			</PasswordProvider>

			<ToastProvider position='bottom-right' />
		</>
	)
}
