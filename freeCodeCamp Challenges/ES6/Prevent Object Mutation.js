/*
 here, we are going to use Object.freeze to prevent the value of PI to get changed from 3.14 to 99(ref. to line no. 7) 
 by freezing the object MATH_CONSTANTS(ref. line 11)
*/
function freezeObj() {
  "use strict";https://github.com/TapasDash/Web-Developement/tree/master/freeCodeCamp%20Challenges
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS); //here,we have freezed the object so that 
                                  //no one is able alter the value of PI, add, or delete properties
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
