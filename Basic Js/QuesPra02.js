// // valid user for voting

// let age = Number(prompt("What is your age ?"));

// if (isNaN(age)) {
//     console.log("Invalid Input.");
// } else if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You can't vote.");
// }


// // shop discount

// let amount = Number(prompt("Enter your Amount..."));

// if (amount > 0 && amount < 1000) {
//     console.log("Your payable amount is:", amount);
// }
// else if (amount >= 1000 && amount < 3000) {
//     console.log("Your payable amount is:", amount - Math.floor((5 * amount) / 100));
// }
// else if (amount >= 3000 && amount < 5000) {
//     console.log("Your payable amount is:", amount - Math.floor((10 * amount) / 100));
// }
// else if (amount >= 5000) {
//     console.log("Your payable amount is:", amount - Math.floor((20 * amount) / 100));
// } else {
//     console.log("Please! Enter valid amount");
// }


// // light bill

// let unit = Number(prompt("Enter Electricity units: "));
// let amt = 0;

// if (isNaN(unit) || unit < 0) {
//     console.log("Please enter a valid unit input");
// } else {

//     if (unit > 400) {
//         amt += (unit - 400) * 13;
//         unit = 400;
//     }

//     if (unit > 200) {
//         amt += (unit - 200) * 8;
//         unit = 200;
//     }

//     if (unit > 100) {
//         amt += (unit - 100) * 6;
//         unit = 100;
//     }

//     if (unit > 0) {
//         amt += unit * 4;
//     }

//     console.log("Your payable amount is", amt);
// }


// // INR denomination

let total_amount = 50253;

if (total_amount >= 500) {
    console.log("number of 500 rupees notes:", Math.floor(total_amount / 500));
    total_amount %= 500;
}
if (total_amount >= 200) {
    console.log("number of 200 rupees notes:", Math.floor(total_amount / 200));
    total_amount %= 200;
}
if (total_amount >= 100) {
    console.log("number of 100 rupees notes:", Math.floor(total_amount / 100));
    total_amount %= 100;
}
if (total_amount >= 50) {
    console.log("number of 50 rupees notes:", Math.floor(total_amount / 50));
    total_amount %= 50;
}
if (total_amount >= 20) {
    console.log("number of 20 rupees notes:", Math.floor(total_amount / 20));
    total_amount %= 20;
}
if (total_amount >= 10) {
    console.log("number of 10 rupees notes:", Math.floor(total_amount / 10));
    total_amount %= 10;
}
if (total_amount >= 5) {
    console.log("number of 5 rupees notes:", Math.floor(total_amount / 5));
    total_amount %= 5;
}
if (total_amount >= 2) {
    console.log("number of 2 rupees notes:", Math.floor(total_amount / 2));
    total_amount %= 2;
}

console.log("number of 1 rupees notes:", total_amount);

// Best Practice Improvement

let amount = 50253;
let notes = [500, 200, 100, 50, 20, 10, 5, 2, 1];

for (let note of notes) {
    let count = Math.floor(amount / note);
    if (count > 0) {
        console.log(`number of ${note} rupees notes:`, count);
        amount %= note;
    }
}
