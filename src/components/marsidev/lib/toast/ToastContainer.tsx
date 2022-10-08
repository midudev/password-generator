/** @jsxImportSource solid-js */
import type { Component } from 'solid-js'
import type { ToastPosition, ToastContainerProps } from '@components/marsidev/types'
import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
import { Toast } from '@components/marsidev/lib/toast/Toast'
import { toastSignals } from '@components/marsidev/lib/toast/toastify'
import { DEFAULT_TOAST_OPTIONS as defaults } from '@components/marsidev/utils/constants'

const CLASSES_BY_POSITION: Record<ToastPosition, string> = {
	'bottom-left': 'left-8 bottom-8',
	'bottom-center': 'left-2/4 bottom-8 -translate-x-2/4',
	'bottom-right': 'right-8 bottom-8',
	'top-left': 'left-8 top-8',
	'top-center': 'left-2/4 top-8 -translate-x-2/4',
	'top-right': 'right-8 top-8'
}

export const ToastContainer: Component<ToastContainerProps> = (props) => {
	const position = props.position ?? defaults.position
	const newestOnTop = props.newestOnTop ?? defaults.newestOnTop

	const classByPosition = CLASSES_BY_POSITION[position]

	return (
		<Portal>
			<aside
				class='fixed z-[9999] flex w-[320px] gap-4 overflow-hidden transition-all duration-700'
				classList={{
					'flex-col-reverse': newestOnTop,
					'flex-col': !newestOnTop,
					[classByPosition]: true
				}}
			>
				<For each={toastSignals()}>
					{(toast) => {
						return (
							<Toast
								toast={toast}
								closeOnClick={props.closeOnClick}
								theme={props.theme}
								transition={props.transition}
								position={position}
							/>
						)
					}}
				</For>
			</aside>
		</Portal>
	)
}
