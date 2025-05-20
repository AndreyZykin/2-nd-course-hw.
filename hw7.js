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
    
const str = 'js';
const upperSTR = str.toUpperCase();
console.log(upperSTR);

function filterByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

// Пример использования:
const strings = ['JavaScript', 'Java', 'Python', 'JS', 'C++'];
const prefix = 'ja';
const result = filterByPrefix(strings, prefix);
console.log(result); // Вывод: ['JavaScript', 'Java']

const floorValue = Math.floor(32.58884);
console.log(floorValue);

const ceilValue = Math.ceil(32.58884);
console.log(ceilValue);

const roundValue = Math.round(32.58884);
console.log(roundValue);

const numberMin = Math.min(52, 53, 49, 77, 21, 32);
console.log(numberMin);

const numberMax = Math.max(52, 53, 49, 77, 21, 32);
console.log(numberMax)

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерация случайного числа от 1 до 10
    console.log(randomNumber);
}

// Вызов функции
getRandomNumber();

function generateRandomArray(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2); // Длина массива в два раза меньше переданного числа
    const randomArray = [];
  
    for (let i = 0; i < arrayLength; i++) {
      randomArray.push(Math.floor(Math.random() * (maxNumber + 1))); // Генерируем случайное число от 0 до maxNumber
    }
  
    return randomArray;
  }
  
  // Пример вызова функции и вывода результата в консоль
  const maxNumber = 10;
  const randomNumbers = generateRandomArray(maxNumber);
  console.log(randomNumbers);

  let displayDate = new Date();
console.log(displayDate);

// Создаем переменную currentDate и присваиваем ей текущую дату
const currentDate1 = new Date();

// Создаем новую дату, которая наступит через 73 дня после текущей
const futureDate = new Date(currentDate1.getTime() + 73 * 24 * 60 * 60 * 1000);

// Выводим дату в консоль
console.log(futureDate);

function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
  }
  const currentDate = new Date(); // Создаем объект Date с текущей датой и временем
  const formattedDate = formatDate(currentDate); // Вызываем функцию formatDate
  console.log(formattedDate); // Выводим результат в консоль
