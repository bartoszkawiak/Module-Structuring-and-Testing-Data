// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

test("should return 0 for an empty string", () => {
  expect(countChar("", "a")).toEqual(0);
});
test("should return 1 for a single matching character", () => {
  expect(countChar("a", "a")).toEqual(1);
});

test("should return 0 for a single non-matching character", () => {
  expect(countChar("b", "a")).toEqual(0);
});

test("should return 1 when character appears once", () => {
  expect(countChar("abc", "b")).toEqual(1);
});

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("A character that does not exist in the string should return 0.", () => {
  const str = "aaaaa";
  const char = "p";
  expect(countChar(str, char)).toEqual(0);
});
