const ABC = 'abcdefghijklmnopqrstuvwxyz'
const defaultConfig = { abc: ABC, mayus: ABC.toUpperCase(), num: '1234567890', symbols: '~!@#$%^&*()_+-{}[].,:;<>=' }

export const generatePassword = (config) => {
	let password = ''
	let orderIndex = 0
	let order = Object.entries(config)
		.reduce((pv, [key, value]) => value && key !== 'length' ? [...pv, key] : pv, [])
		.sort(() => Math.random() - 0.5)

	for (let i = 0; i < config.length; i++) {
		if (orderIndex > order.length - 1) {
			orderIndex = 0
			order = order.sort(() => Math.random() - 0.5)
		}
		const configTurn = defaultConfig[order[orderIndex]]
		password += configTurn[Math.floor(Math.random() * configTurn.length)]
		orderIndex++
	}

	return password
}