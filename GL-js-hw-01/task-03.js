const ADMIN_PASSWORD = 'qwerty';
let message;
message = prompt('Enter you password: ');
if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
alert(message);
