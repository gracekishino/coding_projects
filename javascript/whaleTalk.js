// Converts text to whale talk by removing all consonants and doubling all e's and u's
var input = "turpentine and turtles";
let vowels = ["a","e","i","o","u"];
var resultArray = [];

// Iterate through input string
for (let i = 0; i < input.length; i ++) {
  var letter = input[i].toLowerCase()    // Convert letter to lowercase
  for (let j = 0; j < vowels.length; j ++) {
    if (letter == vowels[j]) {     // Check if letter is a vowel
      resultArray.push(letter);     // Add vowels to result array
      if (letter == 'e' || letter == 'u') {
        resultArray.push(letter);     // Double e's and u's
      }
    }
  }
}

// Convert result array to string and capitalize
let resultString = resultArray.join('').toUpperCase();

// Print result
console.log(resultString)