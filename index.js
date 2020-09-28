// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const tail   = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual:assertArraysEqual,
  assertEqual:assertEqual,
  assertObjectsEqual:assertObjectsEqual,
  countLetters:countLetters,
  countOnly:countOnly,
  eqArrays:eqArrays,
  eqObjects:eqObjects,
  findKey:findKey,
  letterPositions:letterPositions,
  map:map,
  takeUntil:takeUntil,
  without:without
};