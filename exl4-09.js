const prompt = require('prompt-sync')();

var dayOne = Number(prompt('Qual o dia da primeira data ? '));
var monthOne = Number(prompt('Qual o mês da primeira data ? '));
var yearOne = Number(prompt('Qual o ano da primeira data ? '));

var dayTwo = Number(prompt('Qual o dia da segunda data ? '));
var monthTwo = Number(prompt('Qual o mês da segunda data ? '));
var yearTwo = Number(prompt('Qual o ano da segunda data ? '));

var quantityMonthInDays = 30 
var quantityYearInDays = 365

var dateOneInDays = dayOne + (monthOne * quantityMonthInDays) + (yearOne * quantityYearInDays)
var dateTwoInDays = dayTwo + (monthTwo * quantityMonthInDays) + (yearTwo * quantityYearInDays)

if (dateOneInDays < dateTwoInDays){
    console.log(`${dayOne}/ ${monthOne}/${yearOne}`)
    console.log(`${dayTwo}/${monthTwo}/${yearTwo}`)

} else {
    console.log(`${dayTwo}/${monthTwo}/${yearTwo}`)
    console.log(`${dayOne}/${monthOne}/${yearOne}`)

}
