function reverseString(input) {
  const arrayOfInput = input.split("");
  const reversed = arrayOfInput.reverse();
  const result = reversed.join("");

  return result.toLowerCase();
}

module.exports = reverseString;
