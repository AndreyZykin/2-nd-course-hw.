// Скрытие и показ текста заголовка
const header = document.querySelector('#header');
const toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    if (header.style.display === 'none') {
        header.style.display = 'block'; // Показываем заголовок
        toggleButton.textContent = 'Скрыть'; // Меняем текст кнопки
    } else {
        header.style.display = 'none'; // Скрываем заголовок
        toggleButton.textContent = 'Показать'; // Меняем текст кнопки
    }
});

// Динамическое изменение текста заголовка
const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', () => {
    header.textContent = 'Привет, мир!'; // Меняем текст заголовка
});

// Поиск и изменение элементов по классу
const changeDescriptionButton = document.querySelector('#changeDescriptionButton');

changeDescriptionButton.addEventListener('click', () => {
    const descriptions = document.querySelectorAll('.description'); // Находим все элементы с классом description
    descriptions.forEach((element) => {
        element.textContent = 'Измененный текст'; // Изменяем текст каждого элемента
    });
});

   // Получаем кнопку по её ID
        const button = document.getElementById('addButton');

        // Добавляем обработчик события на кнопку
        button.addEventListener('click', function() {
            // Создаем новый элемент <p>
            const newParagraph = document.createElement('p');
            // Устанавливаем текст для нового элемента
            newParagraph.textContent = 'Новый абзац';
            // Добавляем новый элемент в конец документа
            document.body.appendChild(newParagraph);
        });
        
        removeElementButton.addEventListener('click', () => {
    // Находим первый элемент с классом description
    const firstDescription = document.querySelector('.description');
    
    // Проверяем, найден ли элемент
    if (firstDescription) {
        // Удаляем элемент
        firstDescription.remove();
    } else {
        alert('Нет элементов для удаления!');
    }
});