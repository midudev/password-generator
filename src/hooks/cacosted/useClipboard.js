import { useState } from 'react'

export const useClipboard = () => {
	const [isCopy, setIsCopy] = useState(false)
	const copyText = (text) => {
		navigator.clipboard.writeText(text)
		setIsCopy(true)
		setTimeout(() => setIsCopy(false), 2000)
	}
	return { isCopy, copyText }
}
