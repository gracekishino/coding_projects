// Set user name
let userName = 'Grace';

// Greet User
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Set user question
let userQuestion = 'Shall I go for a walk?';

// Display question
console.log(`Your question is: "${userQuestion}"`);

// Set random number 
let randomNumber = Math.floor(Math.random() * 8);

// Set eight ball variable
let eightBall = '';

if (randomNumber===0) {
    eightBall = 'It is certain';
} else if (randomNumber===1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber===2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber===3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber===4) {
    eightBall = 'Do not count on it';
} else if (randomNumber===5) {
    eightBall = 'My sources say no';
} else if (randomNumber===6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber===7) {
    eightBall = 'Signs point to yes';
}
  

// Display answer
console.log(`The answer is: "${eightBall}"`);
