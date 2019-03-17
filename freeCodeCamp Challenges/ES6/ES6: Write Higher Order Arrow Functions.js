/*
High Order Array Functions

Map() : It maps the elememnts of array onto something like string , om an object etc.

Filter() : It filters out the elemnt present in the array with the help of any given condition.

Reduce() : It reduces all the multiple elements of an array into a single entity

*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(num => num >= 0 && Number.isInteger(num)).map(num => num * num);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
