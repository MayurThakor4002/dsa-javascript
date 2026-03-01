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