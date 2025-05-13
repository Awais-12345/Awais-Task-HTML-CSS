let number = [22, 66, 68, 99, 100, 190, 150, 200, 230, 220, 250];
let largest = number[0];
for (let num = 0; num < number.length; num++) {
  if (number[num] > largest) {
    largest = number[num];
  }
}

console.log(largest);
