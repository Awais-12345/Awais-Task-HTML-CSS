const obj = {
    firstName:"Awais",
    lastNmae:"khan",
    age:23,
    gender:"male",
    salary:function(){
        return 100000;
    }

}
 const inser = obj.firstName="khan";
const txt =Object.values(obj,obj.salary());
console.log(txt);
 