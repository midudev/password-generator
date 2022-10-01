export const useCopyText = () => {
	const copyText = (text: string) => {
		navigator.clipboard.writeText(text)
	}
	return {
		copyText
	}
}
