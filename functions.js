function findAreaofRectangle (num1, num2){
    console.log(`The area of the rectangle is ${num1 * num2}`);
}

findAreaofRectangle(3, 7);

let pi = 3.14;
function findAreaofCircle (pi, num1, num2){
    console.log(`The area of the circle is ${pi * num1 * num2}`);
}

findAreaofCircle(pi, 7, 4);
findAreaofCircle(pi, 6, 2);


// function findMin(){
//     let x = 6;
//     let y = 37;
//     if (x < y) {
//         console.log(`The smaller number is ${x}.`)
//     } else {
//         console.log(`The smaller number is ${y}.`)
//     }
// }
//
// findMin();

function findMin(x, y){
        if (x < y) {
        console.log(`The smaller number is ${x}.`)
    } else {
        console.log(`The smaller number is ${y}.`)
    }
}

findMin(16, 9);
findMin(2, 75);
findMin(2, 2);


// function checkEquality () {
//     let x = 5;
//     let y = 5;
//     if (x == y) {
//         console.log(`${x} and ${y} are equal.`)
//     } else {
//         console.log(`${x} and ${y} are not equal.`)
//     }
// }

function checkEquality(x, y){
    if (x == y) {
        console.log(`${x} and ${y} are equal.`)
    } else {
        console.log(`${x} and ${y} are not equal.`)
    }
}

checkEquality(32,32);
checkEquality(24,56);


function CalculateLargestRectangle (num1, num2, num3, num4) {
    console.log(`Rectangle 1 is ${num1 * num2}`);
    console.log(`Rectangle 2 is ${num3 * num4}`);
 let num1 * num2 = 45;
 let num3 * num4 = 34;

 if num1 * num2 > num3 * num4 {
     console.log(`Rectangle 1 is ${num1 * num2}`)
 } else {
     console.log(`Rectangle 2 is ${num3 * num4}`)
 }

}