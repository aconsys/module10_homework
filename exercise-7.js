//Задание 7:

let arr = [0, 1, 0, 2, 10, 15, 14, 0, 1, 5, 20, 21, undefined, true, 0, 6, 5, NaN, null];//чётных - 5, нечётных - 6, нулей - 4
let evenCount = 0; //счётчик чётных
let oddCount = 0; //счётчик нечётных
let zeroCount = 0; //счётчик нулей
 
arr.map(function(item, index, array) {
  if(typeof(item) === 'number' && item % 2 === 0 && item !== 0) {
    evenCount++;
  }
  
  if(typeof(item) === 'number' && item % 2 !== 0 && !isNaN(item % 2) && item !== 0) {
    oddCount++;
  }
  
  if(typeof(item) === 'number' && item === 0) {
    zeroCount++;
  }
});
 
console.log('Количество чётных: ' + evenCount);
console.log('Количество нечётных: ' + oddCount);
console.log('Количество нулей: ' + zeroCount);