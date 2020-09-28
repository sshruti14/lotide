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

const findKey = function (array, callback) {
  const keyValue = Object.keys(array);
  for (let item of keyValue) {
    if (callback(array[item])) {
      return item;
    }
  }
};

module.exports = findKey ;