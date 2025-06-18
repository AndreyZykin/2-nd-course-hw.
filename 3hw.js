let password = 'qwerty';
let userPassword = prompt("Введите пароль");

if (userPassword === password) {
    console.log("Пароль введён верно");
} else {
    console.log("Пароль введён неправильно");
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

// Переименуем переменную 'a', чтобы избежать конфликта
let aValue = '2';
let b = '3';
alert(+aValue + +b);

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
        if (monthNumber > 12) {
            console.log("Ошибка: номер месяца должен быть меньше или равен 12.");
        }
}