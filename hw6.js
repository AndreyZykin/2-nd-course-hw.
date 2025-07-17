document.getElementById('start-game').addEventListener('click', function() {
    playArithmeticGame(); 
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
function playArithmeticGame() {
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
