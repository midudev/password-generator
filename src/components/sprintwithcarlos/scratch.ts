const genRandomString = (length: number) => {
	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const array = [][Array(length)].forEach((item) => {
		const random = randomInteger(32, 124)

		array.push(String.fromCharCode(random))
	})
	return array
}

const test = genRandomString(23)
test
