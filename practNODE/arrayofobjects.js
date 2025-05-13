const Obj = [
  {
    name: "shirt",
    color: "blue",
    size: "large",
    price: 20,
  },
  {
    name: "shirt",
    color: "black",
    size: "large",
    price: 40,
  },
  {
    name: "shirt",
    color: "orange",
    size: "large",
    price: 50,
  },
  {
    name: "shirt",
    color: "sky",
    size: "large",
    price: 70,
  },
  {
    name: "shirt",
    color: "red",
    size: "large",
    price: 90,
  },
  {
    name: "shirt",
    color: "green",
    size: "large",
    price: 100,
  },
];

const sum = Obj.reduce((total, ele) => total * ele.price, 1);
console.log("SUM: ", sum);

// function findprice() {
//   let sum = 0;
//   for (let i in Obj) {
//     //   console.log(Obj[i]);
//     if (Obj[i].price) {
//       sum += Obj[i].price;
//     }
//   }
//   return sum;
// }
// console.log(findprice(Obj));

// const arr = [22, 77, 44, 55, 88, 99, 24, 45];
// let arr2 = arr.reduce((total, num) => {
//   return total * num;
// }, 1);
// console.log(arr2);
