//return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const a_minus_b = arr1.filter(item => !arr2.includes(item)); //a-b
  const b_minus_a = arr2.filter(item => !arr1.includes(item)); //b-a

  const symmetericDifference = a_minus_b.concat(b_minus_a) // a-b Union b-a

 return symmetericDifference

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
