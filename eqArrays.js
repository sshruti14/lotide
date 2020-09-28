// FUNCTION IMPLEMENTATION
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return console.log(
//       `✅ ✅ ✅ Assertion Passed: [   ${actual}  ] === [  ${expected} ]`
//     );
//   } else {
//     return console.log(
//       ` 🛑 🛑 🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`
//     );
//   }
// };

const eqArrays = function (array1, array2) {
  let index = array1.length;
  if (
    !(array1 instanceof Array) ||
    !(array2 instanceof Array) ||
    array1.length !== array2.length
  ) {
    return false;
  } else {
    while (index > 0) {
      index--;
      if (array1[index] === array2[index]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = eqArrays ;