/** @jsxImportSource solid-js */
import '@components/marsidev/styles/toast.css'
import type { ToastTheme, CommonToastOptions, WithUndef } from '@components/marsidev/types'
import type { Component } from 'solid-js'
import type { ToastSignal } from '@components/marsidev/utils/toastify'
import { onRemoveToast } from '@components/marsidev/utils/toastify'
import Check from '@components/marsidev/components/icons/Check'
import { DEFAULT_TOAST_OPTIONS as defaultOptions } from '@components/marsidev/utils/constants'

export type ToastProps = WithUndef<CommonToastOptions> & {
	toast: ToastSignal
}

const CLASSES_BY_THEME: Record<ToastTheme, string> = {
	dark: 'bg-[#121212] text-white',
	light: 'bg-white text-[#757575]'
}

export const Toast: Component<ToastProps> = (props) => {
	const { toast } = props
	const { id, message } = toast

	// priority: toast props (toast function) -> component props -> default options
	const closeOnClick = toast.closeOnClick ?? props.closeOnClick ?? defaultOptions.closeOnClick
	const theme = toast.theme ?? props.theme ?? defaultOptions.theme

	const handleClick = () => {
		if (closeOnClick) {
			onRemoveToast(id)
		}
	}

	const classByTheme = CLASSES_BY_THEME[theme]

	const toastClass = [
		'flex flex-row items-center relative cursor-pointer rounded-md border-t border-l border-r border-b-0 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
		classByTheme
	].join(' ')

	return (
		<div id={`toast.${id}`} role='alert' class={toastClass} onClick={handleClick}>
			<Check />
			<p>{message}</p>
		</div>
	)
}
