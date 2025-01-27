let password = 'qwerty';
let userPassword = prompt("Введите пароль");

if (userPassword === password) {
  console.log("Пароль введён верно");
} else {
  console.log("Пароль введен неправильно");
}


let c = 5;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}


let d = 200;
let e = 50;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}


let a = '2';
let b = '3';
alert(+a + +b);


let monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    if (monthNumber > 13) {
      console.log("Ошибка: номер месяца должен быть меньше или равен 12.");
    }
}