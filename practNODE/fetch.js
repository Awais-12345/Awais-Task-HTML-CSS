const dataToBeSent = console.log("Before Fetched!");

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "GET",
})
  .then((response) => console.log("sdsd: ", response))
//   .then((json) => console.log(json));

console.log("After Fetched!");
