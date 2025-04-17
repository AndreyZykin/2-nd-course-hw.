document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    playGame();
  });
});
const randomNumber = Math.floor(Math.random() * 100) + 1;

function getUserInput(hint) {
  const guess = parseInt(prompt(hint));
  return guess;
}

function playGame() {
  let guess = getUserInput("Угадайте число от 1 до 100:");

  while (guess !== randomNumber) {
    if (guess < randomNumber) {
      guess = getUserInput("Ваше число меньше загаданного. Попробуйте ещё раз:");
    } else if (guess > randomNumber) {
      guess = getUserInput("Ваше число больше загаданного. Попробуйте ещё раз:");
    }
  }

  alert("Поздравляем! Вы угадали число!");
}
playGame();

function number(a, b) {
  if (a < b) {
    return a;
  } 
  else {
    return b;
  }
}
console.log(number(8, 4));
console.log(number(6, 6));

function isEven(number) {
  if (number % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}
const result = isEven(5);
console.log(result);

function printSquare(number) {
  console.log(number * number);
}
printSquare (5);

function getSquare(number) {
  return number * number;
}
const total = getSquare(7);
console.log(total);

function greetUserByAge() {
  const age = parseInt(prompt("Сколько вам лет?"));

  if (isNaN(age) || age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
greetUserByAge();

function cubeNumber() {
  const input = prompt("Введите число:");
  const number = parseFloat(input);

  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  } else {
    const cube = number ** 3;
    return `Число ${number} в кубе равняется ${cube}`;
  }
}
const finish = cubeNumber();
console.log(finish);


const circle1 = {
  radius: 0,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};
circle1.radius = 5;
console.log(`Площадь circle1: ${circle1.getArea()}`);
console.log(`Периметр circle1: ${circle1.getPerimeter()}`);

const circle2 = {
  radius: 0,
  getArea: function () {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

circle2.radius = 3;
console.log(`Площадь circle2: ${circle2.getArea()}`);
console.log(`Периметр circle2: ${circle2.getPerimeter()}`);