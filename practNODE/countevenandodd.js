const arr = [2,8,6,3,7,11,12,16,13,17,19,20];
let evenNumbers= [];
let oddNumbers= [];
function countevenandodd (arr){
  for(let i = 0; i <= arr.length; i++){
    if (arr[i] % 2 === 0){
        evenNumbers.push(arr[i]);
       }
       else{
        oddNumbers.push(arr[i]);
       }
      }
}
countevenandodd(arr);
console.log("evenNumber:",evenNumbers);
console.log("oddNumber:",oddNumbers);


