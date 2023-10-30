// Converts text to whale talk 
var input: String = "terrapins and turtles and fishies"
var output: String = ""

for char in input {
  let lowerChar = char.lowercased()
  switch lowerChar {
    case "a","i","o","t","r":
      output += lowerChar.uppercased()
    case "p":
      output += "PPPP"
    case "e", "u":
      output += lowerChar.uppercased() + lowerChar.uppercased()  
    default:
      continue
  }
}

print(output)