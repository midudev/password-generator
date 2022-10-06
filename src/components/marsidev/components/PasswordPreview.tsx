/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import { usePassword } from '@components/marsidev/lib/PasswordContext'

export const PasswordPreview: Component = () => {
	const { password } = usePassword()

	return (
		<div class='relative mt-6 flex h-[115px] w-full max-w-[800px] items-center justify-center rounded-md border-t border-l border-r border-b-0 bg-white p-8 text-4xl text-black shadow-[0_2px_8px_rgba(0,0,0,0.15)]'>
			{password()}
		</div>
	)
}
