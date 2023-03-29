const readLine = require('readline-sync');

//1
function countUp(n) {

    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i);
    }
    console.log(newArray);
}
countUp(5);

//2
function countUp(n){
    if(n<=0) {
        console.log('invalid');
    } else {
        let newArray=[];
        for(let i = 1; i<=n; i++){
            newArray.push(i);
        }
     console.log(newArray); }
}
countUp(-1);

//3
