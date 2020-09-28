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
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(
      `✅ ✅ ✅ Assertion Passed: [   ${actual}  ] === [  ${expected} ]`
    );
  } else {
    return console.log(
      ` 🛑 🛑 🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`
    );
  }
};

const flatten = function (array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    }
  }
  return newArr;
}; // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
