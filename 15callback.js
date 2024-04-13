// console.log("Start");

// const displayMiddle = () => {
//   console.log(
//     "middle: I'm called by setTimeout so I’ll take some time to complete..."
//   );
// };

// const displayEnd = () => {
//   console.log("End");
// };

// // Asynchronous Code
// setTimeout(displayMiddle, 3000);

// displayEnd();

// using callback

console.log("Start");

const displayMiddle = (callback) => {
  console.log(
    "middle: I’m called by setTimeout so I’ll take some time to complete..."
  );

  // callback function will run only when outer function will complete
  callback();
};

const displayEnd = () => {
  console.log("End");
};

// Asynchronous Code; displayEnd() passed as an argument
setTimeout(displayMiddle, 3000, displayEnd);
