var spanish101: Set = ["Angela", "Declan", "Aldany", "Alex", "Sonny", "Alif", "Skyla"]
var german101: Set = ["Angela", "Alex", "Declan", "Kenny", "Cynara", "Adam"]
var advancedCalculus: Set = ["Cynara", "Gabby", "Angela", "Samantha", "Ana", "Aldany", "Galina", "Jasmine"]
var artHistory: Set = ["Samantha", "Vanessa", "Aldrian", "Cynara", "Kenny", "Declan", "Skyla"]
var englishLiterature: Set = ["Gabby", "Jasmine", "Alex", "Alif", "Aldrian", "Adam", "Angela"]
var computerScience: Set = ["Galina", "Kenny", "Sonny", "Alex", "Skyla"]

// Write your code below 🍎
var allStudents = spanish101.union(german101).union(advancedCalculus).union(artHistory).union(englishLiterature).union(computerScience)

print("All Students\n")
for student in allStudents {
  print(student)
}
print(allStudents.count)

var noLanguage = allStudents.subtracting(german101).subtracting(spanish101)

print("\n\nStudents who aren't taking any language classes\n")
for student in noLanguage {
  print(student)
}

print("\n\nStudents who are Spanish or German\n")
var spanishOrGerman = spanish101.symmetricDifference(german101)
for student in spanishOrGerman {
  print(student)
}

print("\n\nLanguage Award Students\n")
var languageAwardWinners = spanish101.intersection(german101).intersection(englishLiterature)
for student in languageAwardWinners {
  print(student)
}

var sevenPlus = 0

var classSet: Set = [spanish101,german101,englishLiterature,advancedCalculus,artHistory,computerScience]

for item in classSet {
  if item.count > 7 {
    sevenPlus += 1
  }
}
print("\n\nClasses with more than 7 students: \(sevenPlus)")

// extra tasks
spanish101.remove("Skyla")
artHistory.remove("Skyla")
computerScience.remove("Skyla")
allStudents.remove("Skyla")
