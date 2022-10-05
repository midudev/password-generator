import globalState from '../utils/globalState'

const useGlobal = globalState({
	message: null,
	isVisible: false,
	closeDelay: 3000
})
export const useToast = () => {
	const [state, setState] = useGlobal()
	const { message, isVisible, closeDelay } = state
	const toast = (message, closeDelay = 3000) => {
		setState({ message, isVisible: true, closeDelay })
		setTimeout(() => {
			hide()
		}, closeDelay + 500)
	}
	const hide = () => {
		setState({ ...state, isVisible: false })
	}
	return { toast, hide, message, isVisible, closeDelay }
}
