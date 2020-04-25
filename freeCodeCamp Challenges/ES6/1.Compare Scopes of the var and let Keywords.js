function checkScope() {
"use strict";
  let i = "function scope";//the scope of this i variable would be within whole function checkScope()
  if (true) {
   let i = "block scope";//the scope of this i variable would be within the if block only as let i is defined here only
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
