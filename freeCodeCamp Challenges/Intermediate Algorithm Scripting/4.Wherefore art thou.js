function whatIsInAName(collection, source) {
  // const arr = [];
  // Only change code below this line
  // return collection.find(item => Object.keys(item).includes(Object.keys(item)[0]))

 const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
                     .every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));
 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
