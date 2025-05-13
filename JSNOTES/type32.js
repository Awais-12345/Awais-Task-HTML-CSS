var a = ["Awais","Ali","Anas","Ahmad"];
document.write(a + "<br><br>");
var b = a.some(checkname);
document.write(b);
function checkname(d){
    return d = "Awais";
}

document.write("<br><br>");
document.write("<br><br>");


var a = ["Awais","Ali","Anas","Ahmad"];
document.write(a + "<br><br>");
var b = a.every(checkeveryname);
document.write(b);
function checkeveryname(d){
    return d = "Awais","Ali","Anas","Ahamd";
}