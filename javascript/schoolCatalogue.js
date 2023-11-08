class School {
    constructor(name, level, numberOfStudents) {
      this._name = name
      this._level = level
      this._numberOfStudents = numberOfStudents
    }
  
    // Getters
    get name() {
      return this._name
    }
    get level() {
      return this._level
    }
    get numberOfStudents() {
      return this._numberOfStudents
    }
  
    // Setters
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'Number') {
        this._numberOfStudents = newNumberOfStudents
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
  
    // Methods
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.
  `)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)]
    }
  
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents,pickupPolicy, level='primary') {
      super(name, level, numberOfStudents)
      this._pickupPolicy = pickupPolicy
    }
  
    // Getters
    get pickupPolicy() {
      return this>_pickupPolicy
    }
  
  }
  
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, level='middle') {
      super(name, level, numberOfStudents)
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, level='high') {
      super(name, level, numberOfStudents)
      this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
      return this._sportsTeams
    }
  }
  
  // Create a PrimarySchool instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  
  // Create a HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)