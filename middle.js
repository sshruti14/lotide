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

// ACTUAL FUNCTION
const middle = function (array) {
  let length = array.length;

  if (length < 3) {
    return [];
  } else if (length % 2 === 0) {
    return [array[Math.round(length / 2) - 1], array[Math.round(length / 2)]];
  } else if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  }
};

module.exports = middle;
