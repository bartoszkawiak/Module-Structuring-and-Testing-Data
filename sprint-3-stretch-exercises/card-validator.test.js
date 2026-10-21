// - Number must be 16 digits, all of them must be numbers.
// - You must have at least two different digits represented (all of the digits cannot be the same).
// - The final digit must be even.
// - The sum of all the digits must be greater than 16.

import { isCardValid } from "./card-validator.js";

test("card number should have 16 digits", () => {
  const cardNumber = 1234567890987654;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(true);
});

test("card number should have at least two different digits, all of them cannot be the same", () => {
  const cardNumber = 1111111111111111;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});

test("final card digit must be even", () => {
  const cardNumber = 1111111111111118;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(true);
});

test("sum of all the digits must be greater than 16", () => {
  const cardNumber = 2222333344445554;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(true);
});

test("cardNumber must contains only numbers", () => {
  const cardNumber = "1233341234444444";
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});

test("cardNumber sum is less than 16, should return false", () => {
  const cardNumber = 1111111111111110;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});

test("cardNumber uses invalid characters,should return false", () => {
  const cardNumber = "a92332119c011112";
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});
test("cardNumber uses only one type of number,should return false", () => {
  const cardNumber = 4444444444444444;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});

test("cardNumber has odo final number, should return false", () => {
  const cardNumber = 6666666666666661;
  const result = isCardValid(cardNumber);
  expect(result).toEqual(false);
});
