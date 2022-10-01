const validate = (lastValue, newValue) => {
	if (lastValue === newValue) {
		return false;
	}

	if (parseInt(newValue) && parseInt(lastValue)) {

	}

	return true;
}

const getNewValue = (characters, password) => {
	let newVal = characters.charAt(
		Math.floor(Math.random() * characters.length)
	);

	if (!validate(password.slice(-1), newVal)) {
		newVal = getNewValue(characters, password)
	}

	return newVal;
}

export const generatePaswordValue = (length, chars) => {
	let password = "";

	let characters = chars.split('').sort(() => {
		return Math.random() - 0.5
	});
	characters = characters.join('')

  for (let i = 0; i < length; i++) {
    password += getNewValue(characters, password);
  }

  return password;
}

export const generatePasword = (ref, ctnt) =>{
	var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
	var speed = 10;
	var increment = 6;

			
	var clen = ctnt.length;       
	var si = 0;
	var stri = 0;
	var block = "";
	var fixed = "";
	(function rustle (i) {          
	setTimeout(function () {
		if (--i){rustle(i);}
		nextFrame(i);
		si = si + 1;        
	}, speed);
	})(clen*increment+1); 
	function nextFrame(){
		for (var i=0; i<clen-stri; i++) {
			//Random number
			var num = Math.floor(theLetters.length * Math.random());
			//Get random letter
			var letter = theLetters.charAt(num);
			block = block + letter;
		}
		if (si == (increment-1)){
			stri++;
		}
		if (si == increment){
		// Add a letter; 
		// every speed*10 ms
		fixed = fixed +  ctnt.charAt(stri - 1);
		si = 0;
		}
		ref.innerHTML = fixed + block;
		block = "";
	}
}
