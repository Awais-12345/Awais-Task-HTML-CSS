let firstNumber = prompt("Enter First Value: ");
let secondNumber = prompt("Enter Second Value: ");
let temp;

console.log("Before Swapping.....");
console.log("First Number: ", firstNumber);
console.log("Second Number: ", secondNumber);

temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

console.log("After Swapping.....");
console.log("First Number: ", firstNumber);
console.log("Second Number: ", secondNumber);
