// Write your code below 💪
struct Exercise {
  var name: String
  var muscleGroups: [String]
  var reps: Int
  var sets: Int
  var totalReps: Int

  init(name: String, muscleGroups: [String], reps: Int = 10, sets: Int = 3, totalReps: Int = 30) {
    self.name = name
    self.muscleGroups = muscleGroups
    self.reps = reps
    self.sets = sets
    self.totalReps = totalReps
  }
}

struct Regimen {
  var dayOfWeek: String
  var exercises: [Exercise]

  init(dayOfWeek: String, exercises: [Exercise]) {
    self.dayOfWeek = dayOfWeek
    self.exercises = exercises
  }
  
  mutating func addExercise(_ exercise: Exercise) {
    self.exercises.append(exercise)
  }

  func printExercisePlan() {
    print("\nToday is \(self.dayOfWeek) and the plan is to: \n")
    for exercise in self.exercises {
      print("Do \(exercise.sets) sets of \(exercise.reps) \(exercise.name)s")
      print("That's a total of \(exercise.totalReps) \(exercise.name)s.\n")
    }
  }
}

var pushUp = Exercise(name: "Push Up", muscleGroups: ["Triceps", "Chest", "Shoulders"])
var sitUp = Exercise(name: "Sit Up", muscleGroups: ["Core", "Back"])
var squat = Exercise(name: "Squat", muscleGroups: ["Core", "Legs"])



var mondayRegimen = Regimen(dayOfWeek: "Monday",exercises:[pushUp])
var wednesdayRegimen = Regimen(dayOfWeek: "Wednesday",exercises:[sitUp])
var fridayRegimen = Regimen(dayOfWeek: "Friday",exercises:[squat])

mondayRegimen.addExercise(sitUp)
wednesdayRegimen.addExercise(squat)
fridayRegimen.addExercise(pushUp)

mondayRegimen.printExercisePlan()
wednesdayRegimen.printExercisePlan()
fridayRegimen.printExercisePlan()