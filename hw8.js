document.getElementById('playButton').addEventListener('click', function() {
            const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
            const options = ["камень", "ножницы", "бумага"];
            const computerChoice = options[Math.floor(Math.random() * options.length)];

            let result;

            if (userChoice === computerChoice) {
                result = "Ничья!";
            } else if (
                (userChoice === "камень" && computerChoice === "ножницы") ||
                (userChoice === "ножницы" && computerChoice === "бумага") ||
                (userChoice === "бумага" && computerChoice === "камень")
            ) {
                result = "Вы победили!";
            } else {
                result = "Вы проиграли!";
            }

            alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
        });

        const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Используем метод sort с колбэком для сравнения возрастов
console.log(people.sort((a, b) => a.age - b.age));

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Пример использования
console.log(filter([3, -4, 1, 9], isPositive));

const peopleName = [
   { name: 'Глеб', gender: 'male' },
   { name: 'Анна', gender: 'female' },
   { name: 'Олег', gender: 'male' },
   { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleName, isMale));

let secondsPassed = 0;

const intervalId = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate.toString());
    secondsPassed += 3;

    if (secondsPassed >= 30) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000);

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000); // Задержка 1 секунда (1000 миллисекунд)
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {  
            cb(); 
        }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);  // Исправлено: использованы обратные кавычки
}

// Пример вызова
delayForSecond(() => sayHi('Глеб'));