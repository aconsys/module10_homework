//Задание 6:

let arr = ['1', '1', '1', '1', '1'];
let check = true;//Флаг "одинаковости" элементов
 
for(let i = 0; i <= arr.length - 1 && check === true; i++) {
  if (arr[0] != arr[i]) {
    check = false;
  }
}
 
console.log(check);