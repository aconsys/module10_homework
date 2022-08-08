//Задание 3:

let str = '12345 67890';
let reverseStr = '';

for (let i = str.length-1; i >= 0; i--) {
    reverseStr += str[i];
}

console.log(reverseStr);