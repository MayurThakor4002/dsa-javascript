// v pattern

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number:"));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n; j++) {
        if (i == j || i + j == 2*n + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log();

}

