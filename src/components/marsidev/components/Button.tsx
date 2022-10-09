/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource solid-js */
import type { ParentComponent, JSX } from 'solid-js'

type ButtonsProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: ParentComponent<ButtonsProps> = (props) => {
	return (
		<button
			onClick={props.onClick ? props.onClick : () => {}}
			class='flex w-auto min-w-[180px] items-center justify-center gap-2 rounded-[60px] bg-[#9F7AEA] py-2 px-4 text-lg font-bold leading-8 text-white transition duration-150 ease-in-out hover:scale-105 hover:brightness-90 focus:outline-violet-600 active:scale-95'
		>
			{props.children}
		</button>
	)
}
