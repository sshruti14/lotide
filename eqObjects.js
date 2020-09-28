const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');  

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    let index = Object.keys(object1).length;
    for (let i = 0; i < index; i++) {
      if (Array.isArray(object1[i])) {
        let flag = eqArrays(object1[i], object2[i]);
        if (!flag) {
          return false;
        }
      } else if (object1[index] !== object2[index]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects