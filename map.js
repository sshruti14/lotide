// const eqArrays = function (array1, array2) {
//   let index = array1.length;
//   if (
//     !(array1 instanceof Array) ||
//     !(array2 instanceof Array) ||
//     array1.length !== array2.length
//   ) {
//     return false;
//   } else {
//     while (index > 0) {
//       index--;
//       if (array1[index] === array2[index]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// };

// // FUNCTION IMPLEMENTATION
// const assertArraysEqual = function (actual, expected) {
//   if (eqArrays(actual, expected)) {
//     return console.log(
//       `✅ ✅ ✅ Assertion Passed: [   ${actual}  ] === [  ${expected} ]`
//     );
//   } else {
//     return console.log(
//       ` 🛑 🛑 🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`
//     );
//   }
// };


const map = function (array, callback) {
  // console.log("array: ", array);
  // console.log("callback: ", callback);

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;