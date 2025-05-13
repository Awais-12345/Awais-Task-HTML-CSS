var str =("my name is awais. And i am 20 years of age");
var sep = str.split(" ");
let text ="";

  for(var x=0;  x < sep.length; x++){
   let res =sep[x];
   let result= res.length;
   text += `The word is "${res}" and the length is "${result}". `;
  }
  console.log(text);



