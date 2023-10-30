// Rock, Paper, Scissors
// Grace Kishino

// Check that user choice is valid
func getUserChoice(userInput: String) -> String {
  if userInput == "rock" || userInput == "scissors" || userInput == "paper" {
    return userInput
  } else {
    return "You can only enter rock, paper, or scissors. Try again."
  }
}

// Get the computer choice
func getComputerChoice() -> String {
  let randomNumber = Int.random(in: 0...2)
  switch randomNumber {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
    default:
      return "Something went wrong"
  }
}

// Determine the winner!
func determineWinner(_ userChoice: String, _ compChoice: String) -> String {
  var decision: String = "It's a tie"
  switch userChoice {
    case "rock":
      if compChoice == "paper" {
        decision = "The computer won"
      } else if compChoice == "scissors" {
        decision = "The user won"
      }
    case "paper":
      if compChoice == "scissors" {
        decision = "The computer won"
      } else if compChoice == "rock" {
        decision = "The user won"
      }
    case "scissors":
      if compChoice == "rock" {
        decision = "The computer won"
      } else if compChoice == "paper" {
        decision = "The user won"
      }
    default:
      decision = "Something went wrong"
  }
  return decision
}

// Play the game!
let userChoice = getUserChoice(userInput: "paper") 
let compChoice = getComputerChoice()

print("You threw \(userChoice)")
print("the computer threw \(compChoice)")
print(determineWinner(userChoice,compChoice))
