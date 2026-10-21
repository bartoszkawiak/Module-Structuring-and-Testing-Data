/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
import { isValidPassword } from "./password-validator.js";
test("password has at least 5 characters", () => {
  // Arrange
  const password = "Aa1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password have at least one uppercase letter(A-Z)", () => {
  const password = "hello123";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password have at least one lowercase letter(a-z)", () => {
  const password = "A123AA";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password have at least one number(0-9)", () => {
  const password = "RRRqqq";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password have at least one special character(!#$%.*&)", () => {
  const password = "R3ass3";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("rejects a previously used password", () => {
  const password = "Hello123!";

  expect(isValidPassword(password)).toEqual(true);
  expect(isValidPassword(password)).toEqual(false);
});
