export const colorPassword = (string) => {
	return string
		.replace(/[!@#$%^&*]/g, (match) => `<span class="symbol">${match}</span>`)
		.replace(/\d/g, (match) => `<span class="number">${match}</span>`)
}
