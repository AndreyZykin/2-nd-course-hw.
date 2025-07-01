document.addEventListener('DOMContentLoaded', function() {
    // Генерация случайного HEX цвета
    function getRandomColor() {
        return "#" + 
            Math.floor(Math.random() * 256).toString(16).padStart(2, "0") +
            Math.floor(Math.random() * 256).toString(16).padStart(2, "0") +
            Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
    }

    // Обработчик нажатия на кнопку
    document.getElementById('colorBtn').addEventListener('click', function() {
        document.body.style.background = getRandomColor();
    });
});