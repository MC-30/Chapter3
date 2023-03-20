const readLine = require('readline-sync');

//1
function nameSwapper () {
    let first = readLine.question('First Name:');
    let last = readLine.question('Last name:');
    return(`${last}, ${first}`);
}
let name = nameSwapper();
console.log(name);

function NumberGenerator () {
    let num1 = readLine.question('Enter a digit 0 - 9:');
    let num2 = readLine.question('Enter a digit 0 - 9:');
    let total = (`${num1}%{num2}`);
}
console.log(NumberGenerator);