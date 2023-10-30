var text: [String] = ["l", "e", "v", "e", "l"]
var reversed = [String]()

for counter in stride(from: text.count-1, to: -1, by: -1) {
  reversed.append(text[counter])
  print(counter)
}


print(reversed)

if text == reversed {
  print("We have a palindrome!")
} else {
  print("We don't have a palindrome")
}