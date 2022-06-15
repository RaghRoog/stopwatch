let secondsScreen = document.querySelector('.seconds')
let minutesScreen = document.querySelector('.minutes')
let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')
let resetButton = document.querySelector('.reset')

let seconds = 0
let minutes = 0
function secondsTimer(){
    seconds += 1
    if(seconds<=9){
        secondsScreen.textContent = '0' + seconds
    }else if(seconds>9){
        secondsScreen.textContent = seconds
    }
    if(seconds === 60){
        seconds = 0
        minutes += 1
        minutesScreen.textContent = '0' + minutes +':'
        secondsScreen.textContent = '00'
    }
    if (minutes>9){
        minutesScreen.textContent =  minutes +':'
    }
}
let timer
function start(){
    if(!timer){
timer = setInterval(secondsTimer, 1000)
startButton.removeEventListener('click', start)
    }
}
startButton.addEventListener('click', start)

function reset(){
    clearInterval(timer)
    timer = null
    seconds = 0
    minutes = 0
    minutesScreen.textContent = '00:'
    secondsScreen.textContent = '00'
    startButton.addEventListener('click', start)
}
resetButton.addEventListener('click', reset)

function stoping(){
    clearInterval(timer)
    timer = null
    startButton.addEventListener('click', start)
}
stopButton.addEventListener('click', stoping)