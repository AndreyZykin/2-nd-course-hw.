document.addEventListener('DOMContentLoaded', function() {
    const game2 = document.getElementById('game2');
    game2.addEventListener('click', function() {
      playGame();
    });
  });
     // Функция для генерации случайной арифметической задачи
     function generateTask() {
        const operators = ['+', '-', '*', '/'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;

        let task;
        let result;

        switch (operator) {
            case '+':
                task = `${num1} + ${num2}`;
                result = num1 + num2;
                break;
            case '-':
                task = `${num1} - ${num2}`;
                result = num1 - num2;
                break;
            case '*':
                task = `${num1} * ${num2}`;
                result = num1 * num2;
                break;
            case '/':
                task = `${num1} / ${num2}`;
                result = num1 / num2;
                break;
        }

        return { task, result };
    }

    // Основная функция игры
    function playGame() {
        const { task, result } = generateTask();
        const userAnswer = prompt(`Решите задачу: ${task}`);

        if (userAnswer === null) {
            alert('Игра отменена.');
            return;
        }

        const parsedAnswer = parseFloat(userAnswer);

        if (isNaN(parsedAnswer)) {
            alert('Пожалуйста, введите числовое значение.');
            playGame(); // Повторный вызов игры
            return;
        }

        if (parsedAnswer === result) {
            alert('Верно!');
        } else {
            alert(`Ошибка! Правильный ответ: ${result}`);
        }
    };


const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break; // Прерываем цикл, когда встречается значение 10
  }
  console.log(array[i]);
}

const array = [1, 5, 4, 10, 0, 3];
const index = array.indexOf(4);
console.log(index); 

const array = [1, 3, 5, 10, 20];
const result = array.join(' ');
console.log(result); 

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix);

let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array); // [1, 1, 1, 2, 2, 2]

let array = [9, 8, 7, 'a', 6, 5];

// Удаляем букву 'a'
array = array.filter(item => item !== 'a');

// Сортируем массив
array.sort((a, b) => {
    // Приводим элементы к числам для корректной сортировки
    return a - b;
});

console.log(array);

// Исходный массив
const array = [9, 8, 7, 6, 5];

// Запрашиваем у пользователя число
const userGuess = prompt("Угадайте число из массива: " + array.join(", "));

// Проверяем, угадал ли пользователь
if (array.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

const array = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = [...array[0], ...array[1]];
console.log(flattenedArray);

// Создаем массив с произвольными числами от 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Перебираем массив с помощью цикла for
for (let i = 0; i < numbers.length - 1; i++) {
    // Выводим сумму текущего и следующего элементов
    console.log(numbers[i] + numbers[i + 1]);
}

function getSquares(arr) {
    return arr.map(num => num * num);
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares); // Вывод: [1, 4, 9, 16, 25]

function getWordLengths(words) {
    return words.map(word => word.length);
}

// Пример использования
const strings = ['apple', 'banana', 'cherry'];
const lengths = getWordLengths(strings);
console.log(lengths); 

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

// Пример использования
const numbers = [1, -2, 3, -4, 5, -6];
const negativeNumbers = getNegativeNumbers(numbers);
console.log(negativeNumbers); // Вывод: [-2, -4, -6]

// Генерация массива из 10 случайных значений от 0 до 10
const randomArray = Array.from({ length: 10 }, () => Math.random() * 10);

// Находим все четные значения и добавляем их в новый массив
const evenNumbers = randomArray.filter(num => Math.floor(num) % 2 === 0);

// Выводим исходный массив и массив с четными значениями в консоль
console.log("Исходный массив:", randomArray);
console.log("Массив четных значений:", evenNumbers);

// Генерация массива из 6 элементов с помощью Math.random()
const array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

// Вычисление среднего арифметического
const sum = array.reduce((acc, num) => acc + num, 0);
const average = sum / array.length;

// Вывод в консоль
console.log("Сгенерированный массив:", array);
console.log("Среднее арифметическое:", average);
