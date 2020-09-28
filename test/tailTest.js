const tail = require('../tail');
const assert = require('chai').assert;

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail",()=>{

  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns 2 when function is passed an array of length 3 like [1,2,3]", () => {
    const inputName = [1, 2, 3]
    const expectedOutput = 2
    assert.deepEqual(tail(inputName).length, expectedOutput);
  });

  it("returns undfined for and empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns 'Lighthouse,Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});