let arr = [43, 12, 53, 23, 4, -14, 22, 54];

let min = Math.min(arr[0], arr[1]);
let sMin = Math.max(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {

    if (arr[i] < min) {
        sMin = min;
        min = arr[i];
    }
    if (arr[i] < sMin && arr[i] !== min) {
        sMin = arr[i];
    }
}

console.log("Minimum number of element is ", min);
console.log("Second minimum number of array element is ", sMin);