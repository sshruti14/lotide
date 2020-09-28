const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

const result1 = countLetters("I am a girl");
assertEqual(countLetters("I am a girl"), {
  I: 1,
  a: 2,
  m: 1,
  g: 1,
  i: 1,
  r: 1,
  l: 1,
});
assertEqual(result1["I"], 1);
//console.log(count("Daddy"));