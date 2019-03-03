//As we know we cannot change the value of s here, by reassigning to it again i.e by s = [2,5,7] so we have to use another method.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;  /* we will use this method to change the value of s as we cant assign to it directly */
  s[1] = 5;
  s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
