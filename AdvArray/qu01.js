// right rotation by 1 element
let prompt = require("prompt-sync")();

// --------------------
// Right Rotation by 1
// --------------------

let arr = [6, 7, 8, 9, 10];

let copy = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = copy;

console.log("Right Rotation by 1:", arr);


// --------------------
// Right Rotation by k (Basic Method)
// --------------------

let arr2 = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter k value: "));

k = k % arr2.length;

for (let step = 1; step <= k; step++) {

    let copy = arr2[arr2.length - 1];   // ✅ fixed mistake here

    for (let j = arr2.length - 1; j > 0; j--) {   // ✅ changed variable name
        arr2[j] = arr2[j - 1];
    }

    arr2[0] = copy;
}

console.log("Right Rotation by k (Basic):", arr2);


// --------------------
// Efficient Algorithm (Using Extra Array)
// --------------------

let arr3 = [11, 12, 13, 14, 15];

let k2 = Number(prompt("Enter k2 value: "));

k2 = k2 % arr3.length;   // ✅ fixed wrong array reference

let result = new Array(arr3.length);

for (let i = 0; i < arr3.length; i++) {
    result[(i + k2) % arr3.length] = arr3[i];   // ✅ avoid overwrite
}

console.log("Right Rotation by k (Efficient):", result);