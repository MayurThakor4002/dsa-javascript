// Arithmetic Operators in JavaScript

// division 

let a = 21;
let b = 4;

console.log(a / b); // 5.25 - division (Quetient with decimal)
console.log(Math.floor(a / b)); // 5 - floor division (Quotient without decimal)

// mode
console.log(a % b); // 1 - modulus (remainder)

console.log(b % a); // 4 - modulus (remainder) // becuase 4 < 21 and if divisor is greater than dividend, remainder is dividend itself


// trick to get last digit and remove last digit from a number 

let num = 3241;

console.log(Math.floor(num / 10)); // 324 - removing last digit
console.log(num % 10); // 1 - getting last digit


// Relational Operators

let x = 10;
let y = 13;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
console.log(x === y); // false
console.log(x !== y); // true

console.log(x == "10"); // true - value comparison with type coercion
console.log(x === "10"); // false - value and type comparison without type coercion



// Logical Operators

// AND (&&), OR (||), NOT (!)

console.log(85 > 65 && 65 < 100 && 100 !== 10); // true && true && true => true
console.log(85 > 65 && 65 > 100 && 100 !== 10); // true && false && true => false

console.log(85 > 65 || 65 > 100 || 100 !== 10); // true || false || true => true
console.log(85 < 65 || 65 > 100 || 100 === 10); // false || false || false => false

console.log(!true); // false
console.log(!false); // true
console.log(!(85 > 65)); // !(true) => false
console.log(!(85 < 65)); // !(false) => true

// Unary Operators

// postfix increment and decrement

let p = 10;
console.log(p++); // 10 - value before increment
console.log(p); // 11 - value after increment
console.log(p--); // 11 - value before decrement
console.log(p); // 10 - value after decrement

// prefix increment and decrement

let q = 20;
console.log(++q); // 21 - value after increment
console.log(q); // 21
console.log(--q); // 20 - value after decrement
console.log(q); // 20


// Ternary Operator ? :

let m = Math.floor(Math.random() * 10) + 1;
let n = Math.floor(Math.random() * 10) + 1;
let o = Math.floor(Math.random() * 10) + 1;

m > n && m > o ? console.log("M is greater") : n > o ? console.log("n is greater") : console.log("o is greater");

// Switch Statement
 
// syntax
/*
switch(expression) {
    case value1:
        // code to be executed if expression === value1
        break;  
    case value2:
        // code to be executed if expression === value2
        break;
    ...
    default:
        // code to be executed if expression doesn't match any case
}
*/

let color = "green";

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}

// 

let number = 4;

switch (number) {
    case 1:
    case 2:
    case 3:
        console.log("Three");
        break;
    case 4:
    case 5:
        console.log("Five");
        break;

    default:
        console.log("Invalid Number");

}

let newNum = Number((0.2 + 0.1).toFixed(1)); // "0.3"

switch (newNum) {
    case 0.3:
        console.log("Matched");
        break;
    case 0.4:
        console.log("Also Matched");
        break;
    default:
        console.log("Not Matched"); // Not Matched due to floating point precision issue
}

