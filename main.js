const again = document.querySelector('.again');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let actualNum = Math.trunc(Math.random() * 20) + 1;
console.log(actualNum);
let latestScore = Number(score.textContent);
let hScore = Number(highScore.textContent);


function guessNum(guess) {
  const num = Number(guess.value);

  if (!num) {
    message.textContent = 'no number..';
  } else if (num === actualNum) {
    message.textContent = 'Correct number !';
    document.body.style.backgroundColor = '#60b347';
    number.textContent = actualNum;
    number.style.width = '30rem';
    if (latestScore >= hScore) {
      hScore = latestScore;
      highScore.textContent = hScore;
    }
  } else if (num !== actualNum) {
    if (latestScore > 1) {
      message.textContent = num > actualNum ? 'Too high!' : 'Too low!';
      latestScore--;
      score.textContent = latestScore;
    } else 
      message.textContent = 'You lost the Game ......';
  }
  guess.value = '';
}

again.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  actualNum = Math.trunc(Math.random() * 20) + 1;
  console.log(actualNum);
  latestScore = 20;
  score.textContent = latestScore;
  number.textContent = '?';
  number.style.width = '15rem';
  guess.value = '';
});

check.addEventListener('click', () => {
  guessNum(guess);
});

guess.addEventListener('keyup', e => {
  if (e.key === 'Enter') guessNum(guess);
});
