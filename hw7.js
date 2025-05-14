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


