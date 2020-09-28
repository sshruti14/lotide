// // FUNCTION IMPLEMENTATION
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

const assertEqual = require('./assertEqual');

const head = function (arr) {
  return arr[0];
};

module.exports = head;
