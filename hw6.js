document.getElementById('start-game').addEventListener('click', function() {
    playGame();
});

// Функция для генерации случайной арифметической задачи
function generateTask() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;

    let task; // Задача
    let taskResult; // Результат задачи

    switch (operator) {
        case '+':
            task = `${num1} + ${num2}`;
            taskResult = num1 + num2;
            break;
        case '-':
            task = `${num1} - ${num2}`;
            taskResult = num1 - num2;
            break;
        case '*':
            task = `${num1} * ${num2}`;
            taskResult = num1 * num2;
            break;
        case '/':
            if (num2 === 0) num2 = 1; // Избегаем деления на ноль
            task = `${num1} / ${num2}`;
            taskResult = num1 / num2;
            break;
    }

    return { task, result: taskResult }; // Возвращаем объект с задачей и результатом
}

// Основная функция игры
function playGame() {
    const { task, result: correctAnswer } = generateTask(); // Используем деструктуризацию
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

    if (parsedAnswer === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
    }
}

const array1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 10) { // Исправлено на array1
        console.log(array1[i]);
        break; // Прерываем цикл, когда встречается значение 10
    }
    console.log(array1[i]);
}

const array2 = [1, 5, 4, 10, 0, 3];
const indexOfFour = array2.indexOf(4); // Переименовано для уникальности
console.log(indexOfFour); 

const array3 = [1, 3, 5, 10, 20];
const joinedResult = array3.join(' '); // Переименовано для уникальности
console.log(joinedResult); 

const matrix = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    matrix.push(row);
}

console.log(matrix);

let array4 = [1, 1, 1];
array4.push(2, 2, 2);
console.log(array4); // [1, 1, 1, 2, 2, 2]

let array5 = [9, 8, 7, 'a', 6, 5];

// Удаляем букву 'a'
array5 = array5.filter(item => item !== 'a');

// Сортируем массив
array5.sort((a, b) => {
    // Приводим элементы к числам для корректной сортировки
    return a - b;
});

console.log(array5);

// Исходный массив
const array6 = [9, 8, 7, 6, 5];

// Запрашиваем у пользователя число
const userGuess = prompt("Угадайте число из массива: " + array6.join(", "));

// Проверяем, угадал ли пользователь
if (array6.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

let str = 'abcdef';
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

const array7 = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = [...array7[0], ...array7[1]];
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
const numberArray = [1, 2, 3, 4, 5]; // Переименовано для уникальности
const squares = getSquares(numberArray);
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
const numb = [1, -2, 3, -4, 5, -6];
const negativeNumbers = getNegativeNumbers(numb);
console.log(negativeNumbers); // Вывод: [-2, -4, -6]

// Генерация массива из 10 случайных значений от 0 до 10
const randomArray = Array.from({ length: 10 }, () => Math.random() * 10);

// Находим все четные значения и добавляем их в новый массив
const evenNumbers = randomArray.filter(num => Math.floor(num) % 2 === 0);

// Выводим исходный массив и массив с четными значениями в консоль
console.log("Исходный массив:", randomArray);
console.log("Массив четных значений:", evenNumbers);

// Генерация массива из 6 элементов с помощью Math.random()
const randomArray2 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

// Вычисление среднего арифметического
const sum = randomArray2.reduce((acc, num) => acc + num, 0);
const average = sum / randomArray2.length;

// Вывод в консоль
console.log("Сгенерированный массив:", randomArray2);
console.log("Среднее арифметическое:", average);
