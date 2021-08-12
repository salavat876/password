const program = require('commander');
const chalk = require('chalk')
const createPassword = require('./createPassword')

program.version('1.0.0').description('Password Generator')

    program
        .option('-l, --length <number>', 'length of password', `6`)
        .option('-wn, --numbers', 'password has numbers')
        .option('-ws, --symbols', 'password has symbols')
        .option('-ms, --mayBeHasSymbols','password has many or hasn`t symbols')
        .option('-wbl, --bigLetters', 'password has a big letters')
        .parse()

const { length, numbers, symbols, bigLetters,mayBeHasSymbols} = program.opts();

const generatedPassword = createPassword(length,bigLetters,numbers,symbols,mayBeHasSymbols);

console.log(chalk.blue('Your generated password: ') + chalk.bold(generatedPassword));