 // Генерация случайного HEX цвета
        function getRandomColor() {
            // (0..255) для R, G, B, переводим в двухсимвольный HEX и склеиваем
            return "#" + 
                Math.floor(Math.random()*256).toString(16).padStart(2, "0") +
                Math.floor(Math.random()*256).toString(16).padStart(2, "0") +
                Math.floor(Math.random()*256).toString(16).padStart(2, "0");
        }

        // Обработчик нажатия на кнопку
        document.getElementById('colorBtn').addEventListener('click', function() {
            document.body.style.background = getRandomColor();
        });