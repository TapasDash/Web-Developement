// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const chunk_array = [];
  
  for(let i=0; i<arr.length; i+=size){
    chunk_array.push(arr.slice(i,i+size))
  }
  return chunk_array
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
