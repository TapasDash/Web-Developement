/*
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}).
add here is simply a variable name for whatever the default export of the math_functions.js file is.
You can use any name here when importing a default.
*/

import subtract from './math_functions.js' 

subtract(7,4);
