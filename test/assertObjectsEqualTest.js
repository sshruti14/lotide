const assertObjectsEqual = require("../assertObjectsEqual");
const eqObjects = require("../eqObjects");

let flag = eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' });
console.log(flag);
assertObjectsEqual(flag, true);