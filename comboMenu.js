const readLine = require('readLine-sync');
let answer = readLine.question('Chose your sandwich : Chicken $5.25 , Beef $6.25 , Tofu $5.75  :');
console.log(answer);

let answer2 = readLine.question("would you like a beverage? (yes/no):");

if (answer2.toLowerCase() === "yes") {
    let size = readLine.question("What size beverage would you like?(small $1.75, medium $1.75 Large $2.25)")
}else if (answer2.toLowerCase() === "no"){
    console.log("Okay no Problem");
}


let fries = readLine.question('Would you like french fries? (yes , no):');
console.log(fries);
if (answer.toLowerCase() === "yes");
else {
    console.log('ketchup');
}

    let FriesSize = readLine.question("What size french fries would you like? (small $1.00, medium $1.50, large $2.00) :");

    console.log(FriesSize);

if (answer3 = 'small') {
    readLine.question('Would you like to mega-size your fries? (yes , no) :');

}else{
    console.log("ketchup");}




