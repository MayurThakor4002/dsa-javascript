// Demonstrating variable hoisting and scope in JavaScript


// VAR hoisting example 

console.log(a);
var a = 10; // undefined due to hoisting

var c = 30;
console.log(c); // 30
var c = 40;
console.log(c); // 40
c = 100;
console.log(c); // 100

// LET hoisting example

// console.log(b);
// let b = 20; // ReferenceError: Cannot access 'b' before initialization

let d = 50;
console.log(d);
d = 60;
console.log(d);
// let d = 70; // SyntaxError: Identifier 'd' has already been declared

// CONST hoisting example

const e = 80;
console.log(e);
// e = 90; // TypeError: Assignment to constant variable.
// const e = 100; // SyntaxError: Identifier 'e' has already been declared


// addition concatenation

let num = 5;
let str = "10";
console.log(num + str); // "510" - string concatenation
console.log(typeof (num + str)); // "string"

console.log(num + Number(str)); // 15 - numeric addition

// addition of two numbers
let num1 = 15;
let num2 = 25;
console.log(num1 + num2); // 40 - numeric addition


// sum of two number and message
let number1 = 7;
let number2 = 3;

console.log("The sum of 7 and 3 is: " + (number1 + number2)); // "The sum of 7 and 3 is: 10"  // parentheses ensure addition before concatenation // operator precedence
console.log("The sum of 7 and 3 is: " + number1 + number2); // "The sum of 7 and 3 is: 73" // without parentheses, concatenation happens first
console.log(number1 + number2 + " is the sum of 7 and 3"); // "10 is the sum of 7 and 3" // addition happens first due to left-to-right evaluation


// TYPE COERCION examples

console.log(1 + "2"); // "12" - number to string coercion
console.log(1 + 2); // 3 - no coercion needed

console.log("5" - 2); // 3 - string to number coercion
console.log("5" * 2); // 10 - string to number coercion
console.log("10" / 2); // 5 - string to number coercion

// Accept and print user input

let age = prompt("Enter your age:");
console.log("Your age is: " + age); // prints the age entered by the user in form of a string

age = Number(age); // converting string input to number 
console.log("Your age is: " + age); // prints the age as a number  // but input box ke andar string like abcd will give NaN


// Swapping variables via three methods

// 1. Using a temporary variable
let x = 5;
let y = 10;
let temp = x;

x=y;
y=temp;
console.log("After swapping using temp variable: x =", x, ", y =", y); // x=10, y=5

// 2. Using arithmetic operations
let m = 15;
let r = 25;
m = m + r; // m =40
r = m - r; // r=15
m = m - r; // m=25
console.log("After swapping using arithmetic: m =", m, ", r =", r); // m=25, r=15

// 3. Using destructuring assignment

let p = 100;
let q = 200;
[p, q] = [q, p];
console.log("After swapping using destructuring: p =", p, ", q =", q); // p=200, q=100