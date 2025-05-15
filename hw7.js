    document.getElementById('reverseButton').addEventListener('click', function() {
        // Запрашиваем у пользователя текст
        const userInput = prompt("Введите текст для переворота:");

        if (userInput !== null) { // Проверяем, что пользователь ввел текст
            // Переворачиваем текст
            const reversedText = userInput.split('').reverse().join('');

            // Выводим перевернутый текст
            alert("Перевернутый текст: " + reversedText);
        }
    });

        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зеленый"],
                correctAnswer: 2 // номер правильного ответа
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2
            }
        ];
    
        document.getElementById('startQuiz').addEventListener('click', function() {
            let score = 0;
    
            for (let i = 0; i < quiz.length; i++) {
                const question = quiz[i].question;
                const options = quiz[i].options.join('\n');
                const answer = prompt(`${question}\n${options}`);
    
                // Преобразуем ответ в число и сравниваем с правильным ответом
                if (parseInt(answer) === quiz[i].correctAnswer) {
                    score++;
                }
            }
    
            alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
        });
    
