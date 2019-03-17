/*

..args (rest operator) enable a function to take as many arguments a function can

ES6 freeCodeCamp challanege # 10
Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.

const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

*/

const sum = (function() {
  "use strict";
  return function sum(...args) { //omitted instead of sum(x, y, z)
    return args.reduce((a, b) => a + b, 0); //there is no use of const args = [ x, y, z ]; ..we do not have enter the values manually as it'll get stored directly
  };//The rest operator eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array
})();
console.log(sum(1, 2, 3)); // 6
