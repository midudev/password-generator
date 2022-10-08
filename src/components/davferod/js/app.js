(function() {
    let app = document.getElementById('generator')
    let inputCharacters = document.getElementById('n_caracteres')

    let config = {
        characters: parseInt(inputCharacters.value),
        symbols: true,
        numbers: true,
        upperCaseLetters: true,
        lowercase: true,
    }

    let  characters = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        symbols: '¡ ? = ) ( / & % $ # ! ° * ] [ { } _ - . : , ; < > ¿ + ',
        upperCaseLetters: 'A B C D E F G H I I J K L M N O P Q R S T U V W X Y Z',
        lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z',
    }

    // evento evita refresh //
    app.addEventListener('submit', (e) => {e.preventDefault()})


    // botones //
    app.elements.namedItem('btn-plus').addEventListener('click', () => {
        config.characters++
        inputCharacters.value = config.characters
    })

    app.elements.namedItem('btn-minus').addEventListener('click', () => {
        if (config.characters > 3){
            config.characters--
            inputCharacters.value = config.characters
        }
    })

    app.elements.namedItem('btn-symbols').addEventListener('click', () => {
        btnToggle(app.elements.namedItem('btn-symbols'))
        config.symbols = !config.symbols
        console.log(config.symbols)
    })

    app.elements.namedItem('btn-numbers').addEventListener('click', () => {
        btnToggle(app.elements.namedItem('btn-numbers'))
        config.numbers = !config.numbers
    })

    app.elements.namedItem('btn-capital').addEventListener('click', () => {
        btnToggle(app.elements.namedItem('btn-capital'))
        config.upperCaseLetters = !config.upperCaseLetters
    })

    app.elements.namedItem('btn-ignition').addEventListener('click', () =>{
        passwordGenerator()
    })

    // copiar contraseña //
    app.elements.namedItem('input-password').addEventListener('click', () =>{
        copyPassword()
    })

    // funciones //
    function btnToggle(element) {
        element.classList.toggle('false')
        btnBox = element.children[0].textContent
        if( element.children[0].textContent == 'check_box'){
            element.children[0].textContent = 'disabled_by_default'
        } else {
            element.children[0].textContent = 'check_box'
        }
    }

    function passwordGenerator(){
        let finalCharacters=''
        let password = ''

        for(props in config){
            if(config[props] == true){
                finalCharacters += characters[props] + ' ' 
            }
        }
        finalCharacters = finalCharacters.trim()
        finalCharacters = finalCharacters.split(' ')
        for( let i = 0; i < config.characters; i++){
            password = password + finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
        }
        app.elements.namedItem('input-password').value = password
    }

    function copyPassword(){
        app.elements.namedItem('input-password').select()
        document.execCommand('copy')
        document.getElementById('copied').classList.add('active')

        setTimeout(() => {
            document.getElementById('copied').classList.remove('active')
        }, 1500)
    }

    passwordGenerator()
}())