const GeneratePassword = (configuration) => {
	const characters = {
		numbers: '123456789',
		simbols: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
		capitalLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
		lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
	}
	let finalCharacters = ''
	let password = ''

	for (const propierty in configuration) {
		if (configuration[propierty] === true) {
			finalCharacters += characters[propierty] + ''
		}
	}

	finalCharacters += characters.lowercase
	finalCharacters = finalCharacters.trim()

	finalCharacters = finalCharacters.split(' ')

	for (let i = 0; i < configuration.numerosDeCaracteres; i++) {
		password += finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
	}
	return password
}

export default GeneratePassword
