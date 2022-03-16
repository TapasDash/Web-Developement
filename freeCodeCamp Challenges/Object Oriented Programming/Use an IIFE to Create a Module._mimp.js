// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

const funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
  obj.isCute = () => true
},
    singMixin: (obj) => {
  obj.sing = () => console.log("Singing to an awesome tune");
}
  }
})();
