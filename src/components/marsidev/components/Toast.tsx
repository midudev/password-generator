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

	const handleClick = () => {
		if (closeOnClick) {
			onRemoveToast(id)
		}
	}

	const classByTheme = CLASSES_BY_THEME[theme]

	const toastClass = [
		'relative flex max-h-[800px] min-h-[64px] cursor-pointer flex-row items-center overflow-hidden rounded-md border-t border-l border-r border-b-0 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
		classByTheme
	].join(' ')

	const ToastIcon = ICONS_BY_TYPE[toastType]

	return (
		<div id={`toast.${id}`} role='alert' class={toastClass} onClick={handleClick}>
			<span>{ToastIcon}</span>
			<p class='break-words'>{message}</p>
		</div>
	)
}
