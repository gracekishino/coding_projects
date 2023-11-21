const Calculate = {
    factorial(inputNumber) {
      let result = 1
      for (let i = inputNumber; i >= 1; i--) {
        result *= i
      }
      return result;
    }
  }
  
  module.exports = Calculate;
    