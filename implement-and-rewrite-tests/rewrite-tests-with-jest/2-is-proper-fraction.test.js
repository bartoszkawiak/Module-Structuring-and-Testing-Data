// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero

test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when input (1, 2)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`should return false when (numerator = 0)`, () => {
  expect(isProperFraction(0, 4)).toEqual(false);
});
test(`should return false when (numerator===denominator)`, () => {
  expect(isProperFraction(5, 5)).toEqual(false);
});
test(`should return false when (numerator>denominator)`, () => {
  expect(isProperFraction(6, 5)).toEqual(false);
});
test(`should return false when (numerator ===0 && denominator === 0)`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
test(`should return true when numerator is negative number`, () => {
  expect(isProperFraction(-4, 8)).toEqual(true);
});
test(`should return false when numerator and denominator have equal absolute values `, () => {
  expect(isProperFraction(-5, 5)).toEqual(false);
});
test(`should return true when denominator is negative `, () => {
  expect(isProperFraction(3, -5)).toEqual(true);
});
test(`should return false when numerator is zero and denominator is negative zero`, () => {
  expect(isProperFraction(0, -0)).toEqual(false);
});
test(`should return true when numerator and denominator are negative`, () => {
  expect(isProperFraction(-3, -5)).toEqual(true);
});
