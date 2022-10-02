export default function getPassword(upperCase, numbers, symbols, max) {
	const num = '0123456789'
	const abc = 'abcdefghijklmnopqrstuvwxyz'
	const sym = '!@#$%&*()_+-=[]{}|;:,<.>?~'

	const password = []
	let i = 0

	function addChar(list) {
		const index = Math.floor(Math.random() * list.length)
		password.push(list[index])
	}

	while (i < max) {
		addChar(abc)
		i++

		if (upperCase) {
			addChar(abc.toLocaleUpperCase())
			i++
		}
		if (numbers) {
			addChar(num)
			i++
		}
		if (symbols) {
			addChar(sym)
			i++
		}
	}

	let currentIndex = password.length
	let randomIndex
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[password[currentIndex], password[randomIndex]] = [
			password[randomIndex],
			password[currentIndex]
		]
	}

	let cantChart = 0
	cantChart = cantChart + abc.length
	if (upperCase) cantChart = cantChart + abc.length
	if (numbers) cantChart = cantChart + num.length
	if (symbols) cantChart = cantChart + sym.length

	const security = Math.pow(cantChart, max)

	return {
		password: password.join('').slice(0, max),
		security
	}
}
