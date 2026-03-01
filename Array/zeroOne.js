// all zeroes to the left side and all ones to the right.

let arr = [0, 1, 1, 0, 1, 0, 0, 1, 1];

let i = 0;
let j = 0;

while (i < arr.length) {

    if (arr[i] == 0) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
    }
    i++;
}
console.log(arr);
console.log(arr[4]);