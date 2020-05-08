<<<<<<< HEAD
const credits = 23580;
const pricePerDroid = 3000;

const inputCount = prompt('Колличество дроидов для покупки: ');

if (inputCount === null) {
  console.log('Отменено пользователем!');
} else {
  const count = Number(inputCount);
  if (isNaN(Number(inputCount))) {
    console.log('Введено не число!');
  } else {
    const totalPrice = count * pricePerDroid;
    if (totalPrice >= credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${count} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
      );
    }
  }
}
=======
const credits = 23580;
const pricePerDroid = 3000;

const inputCount = prompt('Колличество дроидов для покупки: ');

if (inputCount === null) {
  console.log('Отменено пользователем!');
} else {
  const count = Number(inputCount);
  if (isNaN(Number(inputCount))) {
    console.log('Введено не число!');
  } else {
    const totalPrice = count * pricePerDroid;
    if (totalPrice >= credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      console.log(
        `Вы купили ${count} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`,
      );
    }
  }
}
>>>>>>> e1795a121084904eebc1f9844d4a611b8b38abfd
