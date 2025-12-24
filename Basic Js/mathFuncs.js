// Math Functions

// math.round() - rounds to nearest integer
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4

// math.ceil() - rounds up to next integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(6.9)); // 7

// math.floor() - rounds down to previous integer
console.log(Math.floor(4.8987)); // 4
console.log(Math.floor(9.9999)); // 9

// math.trunc() - removes decimal part
console.log(Math.trunc(5.6789)); // 5
console.log(Math.trunc(3.14159)); // 3

// math.pow(base, exponent) - calculates power
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 4)); // 625

// math.sqrt() - calculates square root
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(81)); // 9

// math.cbrt() - calculates cube root
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(64)); // 4

// math.abs() - returns absolute value
console.log(Math.abs(-10)); // 10
console.log(Math.abs(5)); // 5

// math.max() - returns maximum value among arguments
console.log(Math.max(3, 4, 1, 2, 5, 8)); // 8
console.log(Math.max(-10, -5, -1)); // -1

// math.min() - returns minimum value among arguments
console.log(Math.min(3, 4, 1, 2, 5, 8)); // 1
console.log(Math.min(-10, -5, -1)); // -10

// math.random() - returns random number between 0 (inclusive) and 1 (exclusive)

let randNum = Math.random();
randNum = randNum * 10;
randNum = Math.floor(randNum) + 1;

console.log(randNum); // random integer between 1 and 10

let x = 3.4688;
console.log(x.toFixed(1)); // "3.5"
console.log(x.toFixed(2)); // "3.47"

console.log(typeof x.toFixed(2)); // string