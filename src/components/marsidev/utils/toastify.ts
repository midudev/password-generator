import type { ToastOptions, ToastType, ToastSignal, Toaster } from '@components/marsidev/types'
import { createSignal } from 'solid-js'
import { generatePassword } from '@components/marsidev/utils/generate-password'
import { DEFAULT_TOAST_OPTIONS } from '@components/marsidev/utils/constants'

const generateId = () => generatePassword(8, ['lowercase', 'uppercase', 'numbers'])

const [toastSignals, setToastSignals] = createSignal<ToastSignal[]>([])
export { toastSignals }

export const onAddToastByType = (toastType: ToastType, message: string, options?: ToastOptions) => {
	const toastDuration = options?.duration || DEFAULT_TOAST_OPTIONS.duration
	const { theme, closeOnClick } = options ?? {}

	const newToastSignal: ToastSignal = {
		id: generateId(),
		type: toastType,
		message,
		theme,
		closeOnClick
	}

	setToastSignals((t) => [...t, newToastSignal])

	setInterval(() => {
		const newToasts = toastSignals().filter((toast) => toast.id !== newToastSignal.id)
		setToastSignals(newToasts)
	}, toastDuration)
}

export const onRemoveToast = (id: string) => {
	const toastToRemove = toastSignals().find((toast) => toast.id === id)

	if (toastToRemove) {
		const newToasts = toastSignals().filter((toast) => toast.id !== toastToRemove.id)
		setToastSignals(newToasts)
	}
}

export const toastify = ((): Toaster => {
	const toaster: Toaster = (message, options) => {
		const toastType = options?.type || DEFAULT_TOAST_OPTIONS.type
		onAddToastByType(toastType, message, options)
	}
	toaster.info = (message, options) => {
		onAddToastByType('info', message, options)
	}
	toaster.success = (message, options) => {
		onAddToastByType('success', message, options)
	}
	toaster.warn = (message, options) => {
		onAddToastByType('warn', message, options)
	}
	toaster.error = (message, options) => {
		onAddToastByType('error', message, options)
	}
	return toaster
})()
