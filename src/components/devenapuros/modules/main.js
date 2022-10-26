const charset = {
    lowercase: "abcdefghijklmnñopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};

function generateMiduPass(length, lowercase, uppercase, numbers, symbols) {
    let passwordTemplate = "";
    let passGenerated = "";

    if (lowercase) passwordTemplate += charset["lowercase"];
    if (uppercase) passwordTemplate += charset["uppercase"];
    if (numbers) passwordTemplate += charset["numbers"];
    if (symbols) passwordTemplate += charset["symbols"];

    let i = 0;

    while (i < length) {
        let randomChar =
            passwordTemplate[
                Math.floor(Math.random() * passwordTemplate.length)
            ];
        passGenerated += randomChar;
        i++;
    }

    return passGenerated;
}

let pass = generateMiduPass(89, true, true, true, true);
console.log(pass);
