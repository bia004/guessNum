const guessBtn = document.querySelector('.guess-btn')
const guessInput = document.querySelector('input[type=number]')
const answers = document.querySelector('.number')

const getRandNum = ()=> {
    return Math.floor(Math.random()*100) + 1
}

guessInput.addEventListener("change", ()=>{
    const guess = guessInput.value
})

guessBtn.addEventListener("click", ()=>{
    console.log("click")
    answers.style.visibility = "visible";
    

})

getRandNum()






