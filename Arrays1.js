// //1
//
// let values = [3, 4, 5, 6];
// console.log(values[0]);
//
// //2
// console.log(values[3]);
//
// //3
// let values = [3, 4, 5, 6];
// let empty = []
//
// function checkEmpty(array){
// if (array.length==0) {
//     console.log('empty array');
// } else {
//     console.log(array[0]);
//     console.log(array[1]);
// }}
// checkEmpty(empty)

//4
function reverseArray(arr){
    let lastIndex = arr.length-1;
    for (let i=lastIndex; i>=0; i--){
        console.log(arr[i])
    }
}
reverseArray([20, 10, 5, 1]);
reverseArray(['a', 'b', 'c', 'd', 'e'])

//5
function everyThird(arr){
for (let i = 2; i<arr.length; i=i+3){
    console.log(arr[i])
    }
}
everyThird([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]);

//6
function everySecond(arr){ for (let i = 2; i<arr.length; i=i+2){ console.log(arr[i]) } } everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//7
function biggerThanFour(arr){
    for (let i =0; i<arr.length; i++){
        let item = arr[i];
        if (item > 4){ console.log(item); }
    } }
    biggerThanFour([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//8
function biggerThanNum(arr, num){
    for (let i =0; i<arr.length; i++){
        let item = arr[i];
        if (item > num){ console.log(item); } } }
        biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 20);





