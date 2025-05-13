const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 is started after wait 5 seconds");
  }, 5000);
};

const fun1 = (name) => {
  console.log("fun1 is started", name);
  fun2();
  console.log("fun1 is ending");
};
fun1("Awais");
