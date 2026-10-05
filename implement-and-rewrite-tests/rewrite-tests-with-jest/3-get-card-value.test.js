// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
let suits = ["♠", "♥", "♣", "♦"];
for (let number = 2; number <= 10; number++) {
  for (let suit of suits) {
    test(`should return card value as number`, () => {
      expect(getCardValue(`${number}${suit}`)).toEqual(number);
    });
  }
}
//   Face Cards (J, Q, K)

let chars = ["J", "Q", "K"];

for (let char of chars) {
  for (let suit of suits) {
    test(`should return card value as 10`, () => {
      expect(getCardValue(`${char}${suit}`)).toEqual(10);
    });
  }
}
//   Invalid Cards

let invalidCards = ["22♥", "11K♠", -1, 3, "11^♠"];
for (let card of invalidCards) {
  test(`should return "Invalid card"`, () => {
    expect(() => {
      getCardValue(card);
    }).toThrow();
  });
}

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
