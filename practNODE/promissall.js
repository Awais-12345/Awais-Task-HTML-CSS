const fun1 = function call(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is a first promise");
      a > 5 ? resolve({ "name:": 1 }) : reject("Reject 1");
    }, 10000);
  });
};
const fun2 = function call(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is a second promise");
      a > 5 ? resolve("Agree2") : reject("Reject 2");
    }, 2000);
  });
};

const fun3 = function call(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is a third promis");
      a > 5 ? resolve("Agree3") : reject("Reject 3");
    }, 3000);
  });
};

Promise.race([fun1(10), fun2(20), fun3(30)])
  .then((result) => {
    console.log(typeof result);
    console.log(`result: ${result}`);
  })
  .catch((err) => {
    console.log(`error:${err}`);
  });
