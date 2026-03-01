// Show menu and take user choice
let choice = Number(
    prompt(`Choose an option:
1. Sum of Natural Numbers
2. Factorial of a Number
3. Factors of a Number
4. Prime Number`)
);

// Check user choice
switch (choice) {

    // CASE 1: Sum of natural numbers
    case 1: {
        let n = Number(prompt("Enter number:"));

        // Check invalid input
        if (isNaN(n)) {
            console.log("Invalid input");
            break;
        }

        // Number must be greater than 0
        if (n <= 0) {
            console.log("Number should be more than 0");
            break;
        }

        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }

        console.log(`Sum of ${n} numbers is ${sum}`);
        break;
    }

    // CASE 2: Factorial
    case 2: {
        let n = Number(prompt("Enter number:"));

        if (isNaN(n)) {
            console.log("Invalid input");
            break;
        }

        if (n <= 0) {
            console.log("Number should be more than 0");
            break;
        }

        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }

        console.log(`Factorial of ${n} is ${fact}`);
        break;
    }

    // CASE 3: Factors of a number
    case 3: {
        let n = Number(prompt("Enter number:"));

        if (isNaN(n)) {
            console.log("Invalid input");
            break;
        }

        if (n <= 0) {
            console.log("Number should be more than 0");
            break;
        }

        console.log(`Factors of ${n}:`);
        for (let i = 1; i <= Math.floor(n / 2); i++) {
            if (n % i === 0) {
                console.log(i);
            }
        }
        console.log(n);
        break;
    }

    // CASE 4: Prime number check
    case 4: {
        let n = Number(prompt("Enter number:"));

        if (isNaN(n)) {
            console.log("Invalid input");
            break;
        }
        console.log(isPrime(n));
        break;
    }

    // DEFAULT CASE
    default:
        console.log("Invalid choice");
}


function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i == 0) return false;
    }
    return true;
}


// While loop

// sum of digit

let number = 7963;
let lastDigit;
let add = 0;

while (number > 0) {
    lastDigit = number % 10;

    add += lastDigit;
    number = Math.floor(number / 10);
}
console.log(`sum of ${number} digit is ${add}`)

// reverse number

let positiveNum = 12345;
let rev = 0;

while (positiveNum > 0) {
    let rem = positiveNum % 10;
    rev = rev * 10 + rem;
    positiveNum = Math.floor(positiveNum / 10);
}
console.log(`Reverse of Given number is ${rev}`);

// STRONG Number
console.log("STRONG NUMBER");
let nums = 145;
let temp = nums;
let adds = 0;
console.log(`check number is strong or not:  ${nums}`)
while (nums > 0) {
    let remainder = nums % 10;
    let factorial = 1;
    for (let i = 1; i <= remainder; i++) {
        factorial *= i;
    }

    adds += factorial;
    nums = Math.floor(nums / 10);
}
console.log(adds);
console.log((temp === adds) ? `${temp} is strong number` : `${temp} is not strong number`);