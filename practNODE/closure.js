function hello1() {
  let fruit1 = "Apple";
  let fruit2 = "Mango";
   let fruit3 = "Banana";
  function hello2() {
    console.log(fruit1, fruit2, fruit3);
  }
   fruit1 = "App";
   fruit2 = "Man";
   fruit3 = "Bana";
  return hello2;
}
let c = hello1();
 c();

//  function outerFunction(){
//   const x = ()=>{
//     let a =1;
//     console.log(a);
//     const y = () => {
//         let a = 2;
//         console.log(a);
//         const z = () =>{
//         let a = 3;
//         console.log(a);
//         }
//         // z();
//     }
//     // y();
//   }
//   return x;
//  }
// let d = outerFunction();
//  d();