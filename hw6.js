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
function playGame2() {
    const { task, result } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    if (userAnswer === null) {
        alert('Игра отменена.');
        return;
    }

    const parsedAnswer = parseFloat(userAnswer);

    if (isNaN(parsedAnswer)) {
        alert('Пожалуйста, введите числовое значение.');
        playGame2(); // Повторный вызов игры
        return;
    }

    if (parsedAnswer === result) {
        alert('Верно!');
    } else {
        alert(`Ошибка! Правильный ответ: ${result}`);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.preview-game__button').addEventListener('click', playGame);
});

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break; // Прерываем цикл, когда встречается значение 10
  }
  console.log(array[i]);
}

const arr1 = [1, 5, 4, 10, 0, 3];

const index = arr.indexOf(4);
console.log(index);

const arr2 = [1, 3, 5, 10, 20];

const result = arr.join(' ');
console.log(result);