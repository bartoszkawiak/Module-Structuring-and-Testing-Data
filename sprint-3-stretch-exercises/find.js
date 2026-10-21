function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
//index updates from value of 0 to increment value of +1 every time it loop through while loop if it reach length of str and won't find what it looks for function return -1
// b) What is the if statement used to check
//the if statement checks if str index character is at the same position as char index position we're looking for
// c) Why is index++ being used?
//every time our function loops through while statement index position increment by 1
// d) What is the condition index < str.length used for?
//while index is smaller than length of str the loop would run, if it reaches same value function return -1 instead
