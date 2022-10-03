import React from 'react'

export const useClipBoard = () => {
	const [isCopied, setIsCopied] = React.useState(false)

	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text)
		setIsCopied(true)
	}

	return { isCopied, handleCopy, setIsCopied }
}
