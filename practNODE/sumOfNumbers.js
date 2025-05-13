// console.time();
// let sum = 0;
// for (let x = 0; x <= 15000000000; x++) {
//     sum += x;
// }
// console.log(sum);
// console.timeEnd();

console.time();
const sumTillNumber = 1500000000000;

const sum = (sumTillNumber * (sumTillNumber + 1)) / 2;
console.log(sum);
console.timeEnd();
