// Function that returns a random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function that returns the number of days to train based on the event
const getTrainingDays = event => {
  let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// Function that logs the name and event to the console
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

// Function that logs the name and number of days to the console
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event1 = getRandEvent();
const days1 = getTrainingDays(event1);
const name1 = 'Nala';    

logEvent(name1, event1);
logTime(name1, days1);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
