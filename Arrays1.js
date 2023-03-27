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