"use strict";

var arr = [1, 2, 3, 4, 5, 7, 18, 71, 72]; // const newArr = arr.map(function (item) {
//   return item * 2;

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // Reduce -> forma de consumir todo vetor e transformar em uma unica informacao/variavel/elemento

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Filter ->

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // Finde ->

var find = arr.find(function (item) {
  return item === 7;
});
console.log(find);
