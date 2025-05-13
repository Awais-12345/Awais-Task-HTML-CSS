const arr = [22,12,"Awais",44,55,35,99,66];
let str = [...arr];
for (let i=0; i<arr.length; i++){
    if(arr[i] > str)
        str=arr[i];
}
console.log(str);