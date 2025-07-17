document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', function() {
    playGame();
  });
});
const randomNumber = Math.floor(Math.random() * 100) + 1;

function getUserInput(hint) {
  const guess = parseInt(prompt(hint));
  return guess;
}

function playGame() {
  let guess = getUserInput("Угадайте число от 1 до 100:");

  while (guess !== randomNumber) {
    if (guess < randomNumber) {
      guess = getUserInput("Ваше число меньше загаданного. Попробуйте ещё раз:");
    } else if (guess > randomNumber) {
      guess = getUserInput("Ваше число больше загаданного. Попробуйте ещё раз:");
    }
  }

  alert("Поздравляем! Вы угадали число!");
}
