const guessBtn = document.querySelector('.guess-btn')
const restartBtn = document.querySelector('.restart-btn')
const guessInput = document.querySelector('input[type=number]')
const answers = document.querySelector('.number')
const userGuess = document.querySelector('.user-guess')
const correctGuess = document.querySelector('.correct-guess')
const heading = document.querySelector('.main-heading')


let randNum;
let guess;

getRandNum()

function getRandNum(){
     randNum = Math.floor(Math.random()*10) + 1
}

guessInput.addEventListener("change", ()=>{
   guess = guessInput.value
})

guessBtn.addEventListener("click", ()=>{
    answers.style.visibility = "visible";
    userGuess.textContent += guess
    correctGuess.textContent += randNum
    guessBtn.style.pointerEvents = "none"
    guessInput.disabled = true;
   if(guess == randNum){
    heading.textContent = "Way to go! 👍"
   } else {
    heading.textContent = "Bummer! Try again! 👎"
   }

})

restartBtn.addEventListener("click", ()=>{
getRandNum()
guessBtn.style.pointerEvents = "auto"
guessInput.disabled = false;
guessInput.value = ''
answers.style.visibility = "hidden";
userGuess.textContent = "You guessed: "
correctGuess.textContent = "Correct guess: "
guess = '';
heading.textContent = 'Guess the Number ❓'
})











