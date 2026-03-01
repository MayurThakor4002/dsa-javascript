// ===============================
// 📌 Import prompt-sync (Only Once)
// ===============================
let prompt = require("prompt-sync")();


// ==========================================
// 🔹 PART 1: Left Rotation by k (Basic Method)
// Time Complexity: O(n * k)
// Space Complexity: O(1)
// ==========================================

let arr = [1, 2, 3, 4, 5];

let k = Number(prompt("Enter k value for Basic Left Rotation: "));

// Handle case when k > array length
k = k % arr.length;

for (let step = 1; step <= k; step++) {

    // Store first element
    let firstElement = arr[0];

    // Shift elements one position to left
    for (let j = 0; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }

    // Put stored element at last position
    arr[arr.length - 1] = firstElement;
}

console.log("Basic Left Rotation Result:", arr);



// ==========================================
// 🔹 PART 2: Left Rotation by k (Efficient Method)
// Time Complexity: O(n)
// Space Complexity: O(n)
// ==========================================

let arr3 = [11, 12, 13, 14, 15];

let k2 = Number(prompt("Enter k value for Efficient Left Rotation: "));

// Handle large k values
k2 = k2 % arr3.length;

// Create new array for rotated result
let result = new Array(arr3.length);

// Place elements in correct rotated position
for (let i = 0; i < arr3.length; i++) {

    // Formula for Left Rotation
    result[i] = arr3[(i + k2) % arr3.length];
}

console.log("Efficient Left Rotation Result:", result);