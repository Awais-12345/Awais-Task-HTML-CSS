function call (a) {
  return new Promise((resolve, reject) => {
    console.log("Hello Awais");
    a > 5 ? resolve("This is a resolve") : reject("This is a reject");
  });
}
let satisfy = (result) => {
  console.log(result);
};
let end = (err) => {
  console.log(err);
};

call(5).then(satisfy).catch(end);
