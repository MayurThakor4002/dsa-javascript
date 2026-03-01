// Number Triangle Pattern

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));


// for (let i = 1; i <= n; i++) {

//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(j.toString() + " ");
//     }
//     console.log();

// }


// Alphabetic Triangle Pattern

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(65 + j - 1) + " ");

    }
    console.log();

}