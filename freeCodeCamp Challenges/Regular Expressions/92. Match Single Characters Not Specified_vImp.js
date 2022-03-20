let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^1-9]/ig; // Change this line
let result = quoteSample.match(myRegex); 

// result = [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]
