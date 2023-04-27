const readLine = require('readLine-sync');

let sandwich = readLine.question('Chose your sandwich : Chicken $5.25 , Beef $6.25 , Tofu $5.75  :');
sandwichOpts=['Chicken', 'Beef' , 'Tofu'];
sandwichCost = [5.25 , 6.25, 5.75];
console.log(sandwich);


let beverage = readLine.question("would you like a beverage? (yes/no):");
BevOpts=['Small', 'Medium' , 'Large'];
BevCost = [1.00 , 1.75, 2.25];
if (beverage.toLowerCase() === "yes") {
    let beverageSize = readLine.question("What size beverage would you like?(small $1.75, medium $1.75 Large $2.25)")
}else if (beverage.toLowerCase() === "no"){
    console.log("Okay no Problem");
}


let fries = readLine.question('Would you like french fries? (yes , no):');
console.log(fries);
if (fries.toLowerCase() === "yes")
{

    let FriesSize = readLine.question("What size french fries would you like? (small $1.00, medium $1.50, large $2.00) :");
    console.log(FriesSize);

    if (FriesSize == 'small') {
        let megaSize = readLine.question('Would you like to mega-size your fries? (yes , no) :');

        if (megaSize == 'yes') {
            console.log('Mega-sized to large.');

        }

    }
}
let numPackets = readLine.question("How many ketchup packets would you like?");
let cost = numPackets * 0.25;
console.log("The cost of " + numPackets + " ketchup packets is $" + cost.toFixed(2));




