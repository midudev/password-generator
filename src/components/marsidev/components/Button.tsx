/** @jsxImportSource solid-js */
import type { Component, JSX } from 'solid-js'

interface ButtonsProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	caption: string
	handleClick: () => void
	foo?: string
}

export const Button: Component<ButtonsProps> = ({ caption, handleClick }) => {
	return (
		<button
			onclick={handleClick}
			class='w-auto min-w-[180px] rounded-[60px] bg-[#9F7AEA] py-2 px-4 text-lg font-bold leading-8 text-white transition duration-150 ease-in-out hover:scale-105 hover:brightness-90 focus:outline-violet-600 active:scale-95'
		>
			{caption}
		</button>
	)
}
