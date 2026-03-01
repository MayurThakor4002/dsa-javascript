// Reverse the array

let arr = [10, 20, 30, 40, 50];
// let revArr = new Array(arr.length);

// console.log(...arr.reverse());
let i = 0; j = (arr.length - 1);

let temp;
while(i!==j){

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);