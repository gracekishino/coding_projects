// Media Class
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    // Getters
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
  
    // Setters
    set isCheckedOut(newCheckoutStatus) {
      this._isCheckedOut = newCheckoutStatus;
    }
  
    // Methods
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      return this._ratings.reduce((a, b) => a + b) / this._ratings.length;
    }
    addRating(rating) {
      this._ratings.push(rating);
    }
}
  
// Book Class
class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    // Getters
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
  
// Movie Class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // Getters
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
  
// Create a Book instance
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);

// Toggle and log checkout status
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// Add ratings and log average rating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

// Create a Movie instance
const speed = new Movie(
    "Jan de Bont", 
    "Speed", 
    116
);

// Toggle and log checkout status
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

// Add ratings and log average rating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
  