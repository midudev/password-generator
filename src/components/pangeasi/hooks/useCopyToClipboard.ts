import globalState from '../utils/globalState'

const useGlobal = globalState('')
export const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useGlobal()
	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text)
		setIsCopied(text)
	}
	return [isCopied, copyToClipboard]
}
