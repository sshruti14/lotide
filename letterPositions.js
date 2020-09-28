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

// FUNCTION IMPLEMENTATION
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

const letterPositions = function (sentence) {
  const results = {};
  const allItems = sentence.split("");

  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i] !== " ") {
      if (results[allItems[i]]) {
        results[allItems[i]].push(i);
      } else {
        results[allItems[i]] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;
