//Replace the two assignments with an equivalent destructuring assignment. 
//It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today);//77
console.log(tomorrow);//80
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
