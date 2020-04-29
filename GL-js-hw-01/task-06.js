let input;
let total = 0;
input = prompt('Введите число: ');
while (input != null) {
  if (isNaN(Number(input))) {
    alert('Введено не число!');
  } else {
    total += Number(input);
  }
  input = prompt('Введите число: ');
}
alert(`Общая сумма чисел равна ${total}`);
