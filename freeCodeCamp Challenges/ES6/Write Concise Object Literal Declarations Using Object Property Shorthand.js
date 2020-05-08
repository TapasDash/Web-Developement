//Use object property shorthand with object literals to create and return an object with name, age and gender properties

/*
code below written in old JavaScript

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};

code below written in ES6
*/

const createPerson = (name, age, gender) => ({ name, age, gender });
