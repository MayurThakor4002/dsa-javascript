// ---------------- Rectangle ----------------

// Given length and breadth of the rectangle
let length = 5;
let breadth = 3;

// Area of rectangle = length × breadth
let area = length * breadth;

// Perimeter of rectangle = 2 × (length + breadth)
let perimeter = 2 * (length + breadth);

// Display results
console.log("Area of rectangle:", area);
console.log("Perimeter of rectangle:", perimeter);



// ---------------- 4-Digit OTP ----------------

// Generate a random 4-digit OTP (range: 1000 to 9999)
let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("Generated 4-digit OTP:", otp);



// ---------------- Triangle ----------------

// Sides of the triangle
let a = 6;
let b = 4;
let c = 8;

// Semi-perimeter of triangle: s = (a + b + c) / 2
let s = (a + b + c) / 2;
console.log("Semi-perimeter of triangle:", s);

// Area of triangle using Heron's Formula
let areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Area of triangle:", areaOfTriangle);



// ---------------- Circle ----------------

// Radius of the circle
let r = 7;

// Circumference of circle = 2 × π × r
// toFixed(2) is used to limit the result to 2 decimal places
let circumference = (2 * Math.PI * r).toFixed(2);

console.log("Circumference of circle:", Number(circumference));
