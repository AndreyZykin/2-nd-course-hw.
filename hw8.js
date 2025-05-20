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

