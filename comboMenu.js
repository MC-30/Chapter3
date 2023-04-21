const readLine = require('readLine-sync');
let answer = readLine.question('Chose your sandwich : Chicken $5.25 , Beef $6.25 , Tofu $5.75  :');
console.log(answer);

let fries = readLine.question('Would you like french fries? :');
console.log(fries);


let FriesSize = readLine.question('What Size? Small , Medium , Large  :');
console.log(FriesSize);
