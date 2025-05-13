async function hello() {
  try {
    const p1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const res = await p1.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}

const finalResult = async () => {
  console.log(await hello());
};

finalResult();
