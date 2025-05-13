var ary = [2,4,6,8];
document.write(ary + "<br><br>");
var b =ary.map(double);
document.write(b);
function double(x){
    return x * x;

}