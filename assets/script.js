// write JS for a working timer that starts when the button is clicked
// the timer will start the countdown and hide the start page elements
// the timer will lose 15 seconds if the user gets the answer wrong
// the first question will be prompted by pushing by unhiding the questions element
// the remaining questions will be prompted by the textContent being filled after answering a question


var option1El = document.querySelector(".option-1")
var option2El = document.querySelector(".option-2")
var option3El = document.querySelector(".option-3")
var option4El = document.querySelector(".option-4")
var timerEL = document.querySelector("#timer")
var startPageEl = document.querySelector(".start-page")
var startButton = document.querySelector(".start-button")
var timerSeconds;
var timer;
var started = false;

function countdown (){
    timerSeconds = 90;
    timer = setInterval(function () {
        timerSeconds--;
        timerEL.textContent = "Time: " + timerSeconds;

        if (timerSeconds === 0) {
            timerEL.textContent = "";
            clearInterval(timer);
            started = false;
        }
    }, 1000);
}

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (started) {
        return;
    }
    started = true;
    startPageEl.setAttribute("style", "display: none;")
    countdown();
});