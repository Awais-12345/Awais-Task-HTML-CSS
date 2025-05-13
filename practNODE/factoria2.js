function factorial(b) {
  if (b == 0) return 1;
  else return b * factorial(b - 1);
}
console.log(factorial(1));
