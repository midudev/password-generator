import globalState from '../utils/globalState'
import { useToast } from './useToast'

const useGlobal = globalState('')
export const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useGlobal()
	const { toast } = useToast()

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text)
		setIsCopied(text)
		toast('Copied to clipboard')
	}

	return [isCopied, copyToClipboard]
}
