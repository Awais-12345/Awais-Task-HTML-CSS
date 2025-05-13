const number = 10;
if(number < 0 ){
    console.log(" ERROR: factorial of negative number does not exist");
}
else if (number === 0){
    console.log("the factorial of ${number} is 1:");
}
else {
   let multiply = 1;
for(var i = 1; i<=number; i++){
    multiply *= i;
}
console.log(`the factorial of  ${number} is  ${multiply}.`); 
}

