function sumAll(arr) {
  arr.sort( (a, b) => a - b) // will sort in ascending order
  return [...Array(arr[1]+1).keys()]  // [0,1,2,3,4,5,6,7,8,9]
  .slice(arr[0],arr[1]+1) //.slice(5,11) => [5,6,7,8,9,10]
  .reduce((sum, num) => sum + num ) 

}

sumAll([5, 10]);
