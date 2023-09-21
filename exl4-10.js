const prompt = require('prompt-sync')();

var day = Number(prompt('Qual o dia da data ? '));
var month = Number(prompt('Qual o mês da data ? '));
var year = Number(prompt('Qual o ano da data ? '));

var isValidDay = day > 0 && day <= 30
var isValidMonth = month > 0 && month <= 12
var isValidYear = year > 0 

if (!isValidDay || !isValidMonth || isValidYear) {
    console.log('Data inválida')
} else {
    if (year % 4 !== 0 && month === 2 && day >= 29) {
        console.log('Data inválida)')
    } else if (month  === 2 && year % 4 === 0 && day >= 29) {
        console.log('Data inválida')
    } else {
        console.log('Data válida')
    }
}