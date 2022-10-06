/** @jsxImportSource solid-js */
import type { ParentProps } from 'solid-js'
import type { ToastPosition, ToastProviderOptions } from '@components/marsidev/types'
import { createContext, For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Toast } from '@components/marsidev/components/Toast'
import { toasts } from '@components/marsidev/utils/toastify'
import { DEFAULT_TOAST_OPTIONS as defaultOptions } from '@components/marsidev/utils/constants'

type ToastProviderProps = ParentProps & ToastProviderOptions

const ToastContext = createContext()

const CLASSES_BY_POSITION: Record<ToastPosition, string> = {
	'bottom-right': 'right-8 bottom-8',
	'bottom-left': 'left-8 bottom-8',
	'top-right': 'right-8 top-8',
	'top-left': 'left-8 top-8',
	'bottom-center': 'left-2/4 bottom-8 -translate-x-2/4',
	'top-center': 'left-2/4 top-8 bottom-0 -translate-x-2/4 overflow-hidden'
}

export const ToastProvider = (props: ToastProviderProps) => {
	const position = props.position ?? defaultOptions.position
	const classByPosition = CLASSES_BY_POSITION[position]

	const newestOnTop = props.newestOnTop ?? defaultOptions.newestOnTop
	const classByNewestOnTop = newestOnTop ? 'flex-col-reverse' : 'flex-col'

	const containerClass = ['absolute flex gap-4 z-[9999]', classByPosition, classByNewestOnTop].join(
		' '
	)

	return (
		<ToastContext.Provider value={null}>
			{props.children}

			<Portal>
				<aside class={containerClass}>
					<For each={toasts()}>
						{(toast) => {
							return <Toast toast={toast} closeOnClick={props.closeOnClick} theme={props.theme} />
						}}
					</For>
				</aside>
			</Portal>
		</ToastContext.Provider>
	)
}
