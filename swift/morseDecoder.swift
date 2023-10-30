var englishText = "THIS is a secret message"

var secretMessage = ".... --- .-- -.. -.--   .--. .- .-. - -. . .-. -.-.--"

// Add your code below 🤫

var letterToMorse: [String:String] = [
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  "!": "-.-.--",
  "?": "..--..",
  ".": ".-.-.-"
]

var morseText = ""

for element in englishText.lowercased() {
  if let morseChar = letterToMorse["\(element)"] {
    morseText += " \(morseChar)"
  } else {
    morseText += "   "
  }
}

print(morseText)

var decodedMessage: String = ""
var morseCodeArray = [String]()
var currMorse = ""

for char in secretMessage {
  if char != " " {
    currMorse += "\(char)"
  } else {
    switch currMorse {
      case "":
        currMorse += " "
      case " ":
        morseCodeArray.append(" ")
        currMorse = ""
      default:
        morseCodeArray.append(currMorse)
        currMorse = ""
    }
  }
}
morseCodeArray.append(currMorse)
print(morseCodeArray)

var morseToLetter: [String:String] = [:]

for (letter, morseChar) in letterToMorse {
  morseToLetter[morseChar] = letter
}

print(morseToLetter)
var firstChar: Bool = true
for morseValue in morseCodeArray {
  if let letterChar = morseToLetter[morseValue] {
    if firstChar {
      decodedMessage += letterChar.uppercased()
      firstChar = false
    } else {
      decodedMessage += letterChar
    }

  } else {
    decodedMessage += " "
  }
}

print(decodedMessage)