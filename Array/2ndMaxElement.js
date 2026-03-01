// find 2nd max element of the array;

let arr = [21, 43, 64, 24, 63, 54, 23];
let max;
let sMax;

if (arr[0] > arr[1]) {
    max = arr[0];
    sMax = arr[1];
} else {
    sMax = arr[0];
    max = arr[1];
}

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i];
    }
    else if (arr[i] > sMax && max !== arr[i]) {
        sMax = arr[i];
    }
}

console.log("Maximum element is ", max);
console.log("Second Maximum element is ", sMax);