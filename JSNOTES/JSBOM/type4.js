let  month =  11;

switch(month){
    case 0:
        if(month < 12 && month > 9){
        document.write("Accurate answer");
    } 
    break;
    case 11: 
     if (month < 15 && month >8 ) {
               document.write("Middle answer");
    }
    break;
    default:
        document.write("wrong answer");
}


