// find min and max element of array

let arr = [32, 56, 12, 43, 67, 24];

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {

    if (max < arr[i]) {
        max = arr[i];
    }
    if (min > arr[i]) {
        min = arr[i];
    }
}

console.log("Maximum element is ", max);
console.log("Minimum element is ", min);
