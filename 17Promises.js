let promise = new Promise((resolve, reject) => {
  let x = 3;

  if (x === 3) {
    resolve("true");
  } else {
    reject("false");
  }
});

// resolve runs the first function in .then
// reject runs the second function in .then
promise.then(
  (resolver) => console.log(resolver), // true
  (error) => console.log(error) // doesn't run
);

// reject runs the code in catch
// promise
//   .then((resolver) => console.log(resolver)).then().then() // doesn't run
//   .catch(
//     (error) => console.log(error) // false
//   );
