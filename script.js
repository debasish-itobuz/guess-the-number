'use strict';

const again = document.querySelector('.again')
const check = document.querySelector('.check')
const message = document.querySelector('.message')
let guess = document.querySelector('.guess')
let actualNum  = Math.trunc(Math.random()*20) + 1
console.log(actualNum)
let highScore = document.querySelector('.highscore')

// let temp = hScore
let temp = localStorage.getItem('hScore')
highScore.textContent = temp

console.log("hScore" , temp)

let score = document.querySelector('.score')
let latestScore = Number(score.innerText)
// console.log(latestScore, typeof latestScore)


function guessNum(guess) {
    const num =Number(guess.value)
    latestScore--;
    score.innerText = latestScore
    temp=Number(highScore.innerText)
    const hScore = latestScore
    if (num > actualNum) {
        message.innerHTML = 'too high..'
    }
    else if (num < actualNum) {
        message.innerHTML = 'too low..'
    }
    else if (num === actualNum) {
        message.innerHTML = 'Correct number !'
        document.body.style.backgroundColor = 'green'
        if(hScore >= temp){
            highScore.innerText = hScore
            localStorage.setItem('hScore', hScore)
            check.disabled=true;
        }
    }
    else {
        message.innerHTML = 'Guess....'
    }
    // console.log(guess)
    guess.value = ''
}

again.addEventListener('click', () => {
    score.innerText = 20
    document.body.style.backgroundColor = '#222'
    actualNum  = Math.trunc(Math.random()*20) + 1;
    latestScore=20;
    check.disabled=false;

    console.log(actualNum)
    guess.value = ''

})


check.addEventListener('click', () => {
    guessNum(guess)
})

guess.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter') 
    guessNum(guess)

})