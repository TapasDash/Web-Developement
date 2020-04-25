function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";//we changed from let sentence to const SENTENCE coz we don't want its value t get altered
  for(let i = 0; i < str.length; i+=2) {//changed from var i to let i
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
