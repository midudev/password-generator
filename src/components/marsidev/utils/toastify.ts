import type { ToastOptions, CommonToastOptions, WithUndef } from '@components/marsidev/types'
import { createSignal } from 'solid-js'
import { generatePassword } from '@components/marsidev/utils/generate-password'
import { DEFAULT_TOAST_OPTIONS } from '@components/marsidev/utils/constants'

const generateId = () => generatePassword(16, ['lowercase', 'uppercase', 'numbers'])

export type ToastSignal = WithUndef<CommonToastOptions> & {
	id: string
	message: string
}

export const [toasts, setToasts] = createSignal<ToastSignal[]>([])

export const onRemoveToast = (id: string) => {
	const toastToRemove = toasts().find((toast) => toast.id === id)

	if (toastToRemove) {
		const newToasts = toasts().filter((toast) => toast.id !== toastToRemove.id)
		setToasts(newToasts)
	}
}

export const toastify = (message: string, options?: ToastOptions) => {
	const toastDuration = options?.duration || DEFAULT_TOAST_OPTIONS.duration
	const { theme, closeOnClick } = options ?? {}

	const newToastSignal: ToastSignal = {
		id: generateId(),
		message,
		theme,
		closeOnClick
	}

	setToasts((t) => [...t, newToastSignal])

	setInterval(() => {
		const newToasts = toasts().filter((toast) => toast.id !== newToastSignal.id)
		setToasts(newToasts)
	}, toastDuration)
	// onCleanup(() => clearInterval(timer))
}
