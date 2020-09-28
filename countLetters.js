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

const countLetters = function (str) {
  let obj = {};

  let newStr = str.replace(/\s+/g, "");
  const strArr = newStr.split("");

  for (letter of strArr) {
    if (obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
};

// const result1 = countLetters("I am a girl");
// assertEqual(countLetters("I am a girl"), {
//   I: 1,
//   a: 2,
//   m: 1,
//   g: 1,
//   i: 1,
//   r: 1,
//   l: 1,
// });

// assertEqual(result1["I"], 1);
// assertEqual(result1["a"], 2);
// assertEqual(result1["m"], 1);
// assertEqual(result1["g"], 1);
// assertEqual(result1["i"], 1);
// assertEqual(result1["r"], 1);
// assertEqual(result1["l"], 1);

module.exports = countLetters;
