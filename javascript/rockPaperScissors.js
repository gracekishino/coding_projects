const choices = ['rock','paper','scissors','bomb'];
  
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (choices.includes(userInput)) {
    return userInput;
  } else {
    console.log('Invalid entry. Please enter rock, paper or scissors.');
  }; 
};

const getComputerChoice = () => {
  randNum = Math.floor(Math.random()*3);
  return choices[randNum];

};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice==='bomb') {
    return 'You win!';
  };
  if (userChoice===computerChoice) {
    return 'Tie!';
  };
  if (userChoice==='rock') {
    if (computerChoice==='paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice==='paper') {
    if (computerChoice==='scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice==='scissors') {
    if (computerChoice==='rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
};

function playGame() {
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log('You: ' + userChoice);  
  console.log('Computer: ' + computerChoice);  
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();