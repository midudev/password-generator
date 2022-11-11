export const copyText = (value) => {
	navigator.clipboard.writeText(value)
	alert('Contrasena generada: ' + value)
}