document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', function() {
        playGame();
    });
});


function playGame() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1 / num2;
            break;
    }

    const userAnswer = prompt(`${num1} ${operator} ${num2} = ?`);
    if (parseFloat(userAnswer) === correctAnswer) {
        alert('Верно!');
    } else {
        alert(`Неверно. Правильный ответ: ${correctAnswer}`);
    }
}