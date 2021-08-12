const alphaSmall = 'abcdefghijklmnopqrstuvwxyz'
const alphaBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (
    length = 6,
    hasBigLetters = false,
    hasNumbers = false,
    hasSymbols = false,
    mayBeHasSymbols = false

) => {

    let chars = alphaSmall;


    mayBeHasSymbols ? (chars += symbols.charAt(Math.floor(Math.random() * symbols.length))): '' ;

    hasNumbers ? (chars += numbers): '';

    hasSymbols ? (chars += symbols): '';

    hasBigLetters ? (chars += alphaBig) : '';

    return generatePassword(length,chars)
}

const generatePassword = (length,chars) => {

    let password = '';
    for (let i = 0; i < length; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return password;
}

module.exports = createPassword;