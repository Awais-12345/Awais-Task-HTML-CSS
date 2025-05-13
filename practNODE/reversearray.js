// const arr = [22,99,77,44,33,88];
//   for(let i=arr.length-1; i>0; i--){
//     console.log(arr[i]);
    
//   }


  function reversestr(str){
    let reverse = "";
    for(let i=str.length-1; i>0; i--){
       reverse+=str[i];
    }
      return reverse;
  }
  console.log(reversestr("Hello"));