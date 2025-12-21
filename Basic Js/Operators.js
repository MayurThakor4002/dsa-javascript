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

console.log(85>65 && 65<100 && 100 !== 10); // true && true && true => true
console.log(85>65 && 65>100 && 100 !== 10); // true && false && true => false

console.log(85>65 || 65>100 || 100 !== 10); // true || false || true => true
console.log(85<65 || 65>100 || 100 === 10); // false || false || false => false

console.log(!true); // false
console.log(!false); // true
console.log(!(85>65)); // !(true) => false
console.log(!(85<65)); // !(false) => true

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

