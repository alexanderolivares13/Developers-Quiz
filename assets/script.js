// write JS for a working timer that starts when the button is clicked
// the timer will start the countdown and hide the start page elements
// the timer will lose 15 seconds if the user gets the answer wrong
// the first question will be prompted by pushing by unhiding the questions element
// the remaining questions will be prompted by the textContent being filled after answering a question

var questionh2El = document.querySelector(".question-h2");
var correctEl = document.querySelector(".correct");
var wrongEl = document.querySelector(".wrong");
var option1El = document.querySelector(".option-1");
var option2El = document.querySelector(".option-2");
var option3El = document.querySelector(".option-3");
var option4El = document.querySelector(".option-4");
var timerEl = document.querySelector("#timer");
var startPageEl = document.querySelector(".start-page");
var questionsEl = document.querySelector(".questions");
var endPageEl = document.querySelector(".end-page");
var startButton = document.querySelector(".start-button");
var endButton = document.querySelector("#name-button");
var timerSeconds = 60;
var timer;
var started = false;

function countdown (){
    timer = setInterval(function () {
        timerSeconds--;
        timerEl.textContent = "Time: " + timerSeconds;

        if (timerSeconds <= 0) {
            timerEl.textContent = "Time: 60";
            clearInterval(timer);
            started = false;
            questionsEl.setAttribute("style", "display: none;");
            endPageEl.setAttribute("style", "display: block;");
            timerSeconds = 0
        }
    }, 1000);
}

startButton.addEventListener("click", function() {
    if (started) {
        return;
    }
    startPageEl.setAttribute("style", "display: none;");
    questionsEl.setAttribute("style", "display: block;");
    started = true;
    countdown();
});

option1El.addEventListener("click", function() {
    if (option1El.textContent === "1. Strings") {
        correctEl.textContent = "Correct!";
// Question 3
        questionh2El.textContent = "What can a variable consist of?";
        option1El.textContent = "1. Functions";
        option2El.textContent = "2. Arrays";
        option3El.textContent = "3. Booleans";
        option4El.textContent = "4. All of the above";

    } else if (option1El.textContent !== "1. Strings") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    } 
    if (option1El.textContent === "1. Yes") {
        clearInterval(timer);
        questionsEl.setAttribute("style", "display: none;");
        endPageEl.setAttribute("style", "display: block;");
    }

});

option2El.addEventListener("click", function() {
    if (option2El.textContent === "2. Parenthesis") {
        correctEl.textContent = "Correct!";
// Question 2.
        questionh2El.textContent = "What data type is specified by quotations?";
        option1El.textContent = "1. Strings";
        option2El.textContent = "2. Numbers";
        option3El.textContent = "3. Booleans";
        option4El.textContent = "4. Objects";

    } else if (option2El.textContent !== "2. Parenthesis") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    }
});

option3El.addEventListener("click", function() {
// if the arguement is true this is the end of question 4, leading the user to the end page.
    if (option3El.textContent === "3. Yes in green") {
        clearInterval(timer);
        started = false;
        questionsEl.setAttribute("style", "display: none;");
        endPageEl.setAttribute("style", "display: block;");
    } else if (option3El.textContent !== "3. Yes in green") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    }
});

option4El.addEventListener("click", function() {
    if (option4El.textContent === "4. All of the above") {
        correctEl.textContent = "Correct!";
// Question 4
        questionh2El.textContent = "Are arrays, functions, and expressions objects?";
        option1El.textContent = "1. Yes";
        option2El.textContent = "2. No";
        option3El.textContent = "3. Yes in green";
        option4El.textContent = "4. No in red";
        option1El.setAttribute ("style", "background-color: white;")
        option2El.setAttribute ("style", "background-color: white;")
        option3El.setAttribute ("style", "background-color: green;")
        option4El.setAttribute ("style", "background-color: red;")

    } else if (option4El.textContent !== "4. All of the above") {
        wrongEl.textContent = "Wrong! Please try again";
        timerSeconds = timerSeconds - 15;
    }
});

endButton.addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.querySelector("#name-box").value;
    window.location.href = "./assets/highscores.html";
    localStorage.setItem("name", name);
    localStorage.setItem("score", timerSeconds);
});