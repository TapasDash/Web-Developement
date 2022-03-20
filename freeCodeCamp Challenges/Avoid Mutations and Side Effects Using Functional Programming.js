// One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier
// to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

// Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
// A function, ideally, should be a pure function, meaning that it does not cause any side effects.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1

  // Only change code above this line
}
