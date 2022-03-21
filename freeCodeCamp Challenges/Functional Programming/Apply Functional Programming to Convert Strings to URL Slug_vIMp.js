// Only change code below this line
function urlSlug(title) {

 return title
    .split(/\W/g) //mathches the  the words and spaces
    .map(str => str.toLowerCase())
    .filter(Boolean) //filters out falsy values i.e spaces
    .join('-')

}
// Only change code above this line
urlSlug(" Winter Is  Coming") 
