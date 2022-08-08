//Задание 1:

let value = +prompt('Введите число');

if (typeof(value) == 'number' && !isNaN(value)) {
  if (value % 2) {
    console.log('Введённое число нечётное')
  } else {
    console.log('Введённое число чётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}