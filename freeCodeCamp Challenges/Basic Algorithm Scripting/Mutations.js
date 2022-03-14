// ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  const strings1 = arr[0].split('').map(ele => ele.toLowerCase());
  const strings2 = arr[1].split('').map(ele => ele.toLowerCase())
  
  return strings2.every(string=> strings1.includes(string))
}

mutation(["Mary", "Army"]);
