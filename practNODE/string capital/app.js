let input = prompt("Enter the name");
let str = input.split(" ");
let text = '';

for (var x=0; x < str.length; x++ ){
    let res = str[x];
    let result = res.charAt(0).toUpperCase() + res.slice(1);
    text += result + " ";
}
console.log(text);




