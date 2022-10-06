export type ToastPosition =
	| 'top-left'
	| 'top-right'
	| 'top-center'
	| 'bottom-left'
	| 'bottom-right'
	| 'bottom-center'

export type ToastTheme = 'light' | 'dark'

export type CommonToastOptions = {
	theme?: ToastTheme
	closeOnClick?: boolean
}

export type ToastOptions = CommonToastOptions & {
	// toast function-only options
	duration?: number
}

export type ToastProviderOptions = CommonToastOptions & {
	// provider-only options
	position?: ToastPosition
	newestOnTop?: boolean
}
