const copyToClipboard = (textToCopy) => {
	navigator.clipboard.writeText(textToCopy);
}

export { copyToClipboard }
