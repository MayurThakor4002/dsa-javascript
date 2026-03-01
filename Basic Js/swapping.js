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