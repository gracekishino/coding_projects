const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
  }

  static generateField(side) {
    let arr = [];

    // creating two-dimensional array
    for (let i = 0; i < side; i++) {
      arr[i] = [];
      for (let j = 0; j < side; j++) {
        arr[i][j] = fieldCharacter;
      }
    }

    // Add holes and hat
    for (let i = 0; i < 21; i ++) {
        let ranRow = Math.floor(Math.random() * side);
        let ranCol = Math.floor(Math.random() * side);
        if (ranRow === 0 & ranCol === 0) {
            ranRow += 1;
        };
        arr[ranRow][ranCol] = i === 20 ? hat : hole;
    }

    // add start
    arr[0][0] = pathCharacter;

    return arr;
  }

  print() {
    for (const line of this.field) {
        console.log(line.join(' '));
    }
  }
  play() {
    this.print();

    let hatFound = false;
    let xPos = 0;
    let yPos = 0;

    while (!hatFound) {
      const way = prompt('Which way?');
      switch(way){
        case 'l':
          xPos -= 1;
          break;
        case 'r':
          xPos += 1;
          break;
        case 'u':
          yPos -= 1;
          break;
        case 'd':
          yPos += 1;
          break;
        default:
          console.log('Please enter l,r,u or d');
      }
      if (xPos < 0 || yPos < 0 || xPos > this.field.length -1 || yPos > this.field.length -1) {
        console.log('You fell off the board.');
        console.log('Game Over!');
        break;
      // TODO fix below code
      } else if (this.field[yPos][xPos] === hole) {
        console.log('You fell in a hole.');
        console.log('Game Over!');
        break;
      } else if (this.field[yPos][xPos] === hat) {
        console.log('You found your hat!');
        console.log('Well done!');
        break;
      } else {
        this.field[yPos][xPos] = pathCharacter;
        this.print();
      }
    }
  }
}

myField = new Field(Field.generateField(10));
myField.play();
