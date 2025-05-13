// function iseven(checknumber) {
//   return checknumber % 2 === 0 ? true : false;
// }

// console.log(iseven(4) ? "this is a even number" : "otherwise odd number");

// EVEN or ODD without modulo operator

function iseven(checknumber) {
  return Math.floor(checknumber / 2) * 2 === checknumber ? true : false;
}

console.log(iseven(8) ? "this is a even number" : "otherwise odd number");
