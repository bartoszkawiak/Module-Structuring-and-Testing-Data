const passwords = [];
export function isValidPassword(password) {
  let hasUpper = false;
  let hasLower = false;
  let hasNumbers = false;
  let hasSpecialChars = false;
  const minLength = password.length >= 5;
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!#$%.*&";

  for (const char of password) {
    hasUpper = upperLetters.includes(char) ? true : hasUpper;
    hasLower = lowerLetters.includes(char) ? true : hasLower;
    hasNumbers = numbers.includes(char) ? true : hasNumbers;
    hasSpecialChars = specialChars.includes(char) ? true : hasSpecialChars;
  }
  if (
    minLength &&
    hasLower &&
    hasUpper &&
    hasNumbers &&
    hasSpecialChars &&
    !passwords.includes(password)
  ) {
    passwords.push(password);
    return true;
  } else {
    return false;
  }
}
