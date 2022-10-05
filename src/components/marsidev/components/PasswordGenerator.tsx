/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { PasswordOptions } from '@components/marsidev/components/PasswordOptions'
import { ButtonsMenu } from '@components/marsidev/components/ButtonsMenu'
import { PasswordPreview } from '@components/marsidev/components/PasswordPreview'
import { PasswordProvider } from '@components/marsidev/components/PasswordContext'

export const PasswordGenerator: Component = () => {
	return (
		<PasswordProvider>
			<div class='flex min-h-[400px] w-full max-w-2xl flex-col items-center justify-center gap-6 rounded-3xl border-4 border-white text-center'>
				<PasswordPreview />
				<ButtonsMenu />
				<PasswordOptions />
			</div>
		</PasswordProvider>
	)
}
