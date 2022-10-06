/** @jsxImportSource solid-js */
import type {
	ToastTheme,
	CommonToastOptions,
	WithUndef,
	ToastSignal,
	ToastType
} from '@components/marsidev/types'
import type { Component, JSX } from 'solid-js'
import { onRemoveToast } from '@components/marsidev/utils/toastify'
import { Success, Error, Info, Warn } from '@components/marsidev/components/icons'
import { DEFAULT_TOAST_OPTIONS as defaultOptions } from '@components/marsidev/utils/constants'

export type ToastProps = WithUndef<CommonToastOptions> & {
	toast: ToastSignal
}

const CLASSES_BY_THEME: Record<ToastTheme, string> = {
	dark: 'bg-[#121212] text-white',
	light: 'bg-white text-[#757575]'
}

const ICONS_BY_TYPE: Record<ToastType, JSX.Element> = {
	success: Success,
	error: Error,
	info: Info,
	warn: Warn,
	default: null
}

export const Toast: Component<ToastProps> = (props) => {
	const { toast } = props
	const { id, message, type: toastType } = toast

	// priority: toast props (toast function) -> component props -> default options
	const closeOnClick = toast.closeOnClick ?? props.closeOnClick ?? defaultOptions.closeOnClick
	const theme = toast.theme ?? props.theme ?? defaultOptions.theme
	const isDarkTheme = theme === 'dark'

	const handleClick = () => {
		if (closeOnClick) {
			onRemoveToast(id)
		}
	}

	const classByTheme = CLASSES_BY_THEME[theme]
	const classByCloseOnClick = closeOnClick ? 'cursor-pointer' : 'cursor-auto'

	const toastClass = [
		'relative flex flex-row max-h-[800px] min-h-[64px] justify-start items-start overflow-hidden rounded-md border-t border-l border-r border-b-0 p-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
		classByTheme,
		classByCloseOnClick
	].join(' ')

	const ToastIcon = ICONS_BY_TYPE[toastType]

	return (
		<div
			aria-labelledby={`toast.${id}.body.label`}
			aria-live='assertive'
			aria-atomic='true'
			role='alert'
			class={toastClass}
			onClick={handleClick}
		>
			<div
				id={`toast.${id}.body`}
				class='mx-0 my-auto flex shrink grow basis-auto flex-row items-center border-black p-[6px]'
			>
				<span id={`toast.${id}.body.icon`}>{ToastIcon}</span>
				<p id={`toast.${id}.body.label`} class='select-none break-words'>
					{message}
				</p>
			</div>

			<button
				id={`toast.${id}.close-button`}
				type='button'
				aria-label='Close toast'
				data-dismiss='toast'
				classList={{ 'text-white': isDarkTheme, 'text-black': !isDarkTheme }}
				class='cursor-pointer border-0 bg-transparent p-0 opacity-30 outline-0 transition-all duration-300 ease-in-out hover:opacity-100'
				onClick={() => onRemoveToast(id)}
			>
				<svg aria-hidden='true' viewBox='0 0 14 16' fill='currentColor' height='16' width='14'>
					<path
						fill-rule='evenodd'
						d='M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
					></path>
				</svg>
			</button>
		</div>
	)
}
