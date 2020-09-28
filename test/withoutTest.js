const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["hello", "world", "lighthouse"];
//Test Case1
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
