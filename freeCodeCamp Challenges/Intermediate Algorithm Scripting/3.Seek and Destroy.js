function destroyer(arr,...args) {
//  console.log({arr,args}) // destroyer(arr,...args) 
//  =>arr: [ 1, 2, 3, 1, 2, 3 ], args: [ 2, 3 ] }
// console.log({arr,args}) // destroyer(arr,args) 
//  =>arr: [ 1, 2, 3, 1, 2, 3 ], args: 2}
  return arr.filter(item => !args.includes(item)) // [1,1]
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
