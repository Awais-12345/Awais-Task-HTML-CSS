const arr = [22,12,"Awais",44,"55","ahmad",35,99,66];
let largest = arr[0];
let str = [];
  for (let i=0; i<=arr.length-1; i++){
    if(!isNaN(arr[i])){
        if(arr[i] > largest){
         largest = arr[i];
    }
    }
    else {
        str.push(arr[i])
        // console.log("object");
        console.log(arr.indexOf(arr[i]));
}
    
}
// console.log(str);
// console.log(arr[i]);
console.log(largest);
console.log({str});
