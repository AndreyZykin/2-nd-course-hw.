// Получаем ссылки на заголовок и кнопку
const header = document.querySelector('#header');
const toggleButton = document.querySelector('#toggleButton');

// Флаг для отслеживания состояния заголовка
let isHidden = false;

// Добавляем обработчик события click на кнопку
toggleButton.addEventListener('click', () => {
    if (isHidden) {
        header.style.display = 'block'; // Показываем заголовок
        toggleButton.textContent = 'Скрыть'; // Меняем текст кнопки
    } else {
        header.style.display = 'none'; // Скрываем заголовок
        toggleButton.textContent = 'Показать'; // Меняем текст кнопки
    }
    isHidden = !isHidden; // Меняем состояние флага
});