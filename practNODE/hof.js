// const students = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 23 },
// ];
// let secondarray = students.map((ele) => ele.name.toUpperCase());
// console.log(secondarray);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let secondarray = numbers.map((ele) => ele * ele).filter((ele1) => ele1 > 10);
// console.log(secondarray);

// const products = [
//   { price: 10, quantity: 2 },
//   { price: 20, quantity: 3 },
//   { price: 30, quantity: 1 },
// ];

// let leed = products
//   .map((ele) => ele.price * ele.quantity)
//   .reduce((total, acc) => total + acc);
// console.log(leed);

// const products = [
//   { price: 10, quantity: 2 },
//   { price: 20, quantity: 3 },
//   { price: 30, quantity: 1 },
// ];

// let led = products.reduce((total, acc) => total + acc.price * acc.quantity,0);
// console.log(led);
// const arr = [10,41,2,0,99,20,4];
//  let sortingarray = arr.sort((a,b)=>a-b);
//  console.log(sortingarray);

// const books = [
//   { title: "Book A", publishedYear: 2015 },
//   { title: "Book B", publishedYear: 2010 },
//   { title: "Book C", publishedYear: 2020 },
// ];
// const sorting = books.sort(
//   (ele1, ele2) => ele1.publishedYear - ele2.publishedYear);
// console.log(sorting);
const users = [
  { id: 1, age: 17 },
  { id: 2, age: 21 },
  { id: 3, age: 16 },
  { id: 4, age: 18 },
];
let add = users.map((ele) => {
  return {
    id: ele.id,
    message: ele.age > 18 ? "User is an adult" : "User is a minor",
  }
  
});
console.log(add);
// const products = [
//   { name: "Laptop", category: "electronics", price: 1200 },
//   { name: "Shoes", category: "clothing", price: 80 },
//   { name: "Headphones", category: "electronics", price: 150 },
//   { name: "T-Shirt", category: "clothing", price: 25 },
// ];
// const filter = products.filter(
//   (ele) => ele.category === "electronis" || ele.price > 100
// );
// console.log(filter);

// const grades = [
//     [90, 80, 85],
//     [78, 88, 92],
//     [85, 95, 100]
//   ];
//  let calculate = grades.flat().reduce((total,acc)=> total + acc);
//   console.log(calculate);
// const grades = [
//     [90, 80, 85],
//     [78, 88, 92],
//     [85, 95, 100]
//   ];
  
//   const studentAverages = grades.map(studentGrades => {
//     const total = studentGrades.reduce((acc, grade) => acc + grade, 0);
//     return total / studentGrades.length;
//   });
  
//   console.log(studentAverages);