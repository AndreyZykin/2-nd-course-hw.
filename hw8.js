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