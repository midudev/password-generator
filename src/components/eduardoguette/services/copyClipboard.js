async function copyClipboard(value) {
	console.log(value)
	await navigator.clipboard.writeText(value)
	return await navigator.clipboard.readText()
}
export default copyClipboard
