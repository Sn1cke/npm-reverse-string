function reverseString(input) {
  const arrayOfInput = input.split("");
  const reversed = arrayOfInput.reverse();
  const result = reversed.join("");

  return result;
}

module.exports = reverseString;
