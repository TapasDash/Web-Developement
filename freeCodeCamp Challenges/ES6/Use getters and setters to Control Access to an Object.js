//The constructor accepts a Fahrenheit temperature.
//Now create a getter and a setter in the class, to obtain the temperature in Celsius.

// Only change code below this line
class Thermostat {
  constructor(f) {
    this._c = 5/9 * (f - 32);// here _c means private by convention
  }
  get temperature(){
    return this._c;
  }
  set temperature(updatedTemp){
    this._c = updatedTemp;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
