const readLine = require('readline-sync');

//1
function nameSwapper () {
    let first = readLine.question('First Name:');
    let last = readLine.question('Last name:');
    return(`${last}, ${first}`);
}
let name = nameSwapper();
console.log(name);