// write JS for a working timer that starts when the button is clicked
// the timer will start the countdown and hide the start page elements
// the timer will lose 15 seconds if the user gets the answer wrong
// the first question will be prompted by unhiding the questions element
// the remaining questions will be prompted by the textContent being filled after answering a question

//setting variables from the document elements

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

// The variables used for the timer, the seconds is set globally to be accessible to other functions of the code. 
// The started variable is used so the startButton can only be clicked once to activate the timer
var timerSeconds = 60;
var timer;
var started = false;

// Declaring the countdown variable
function countdown (){
    timer = setInterval(function () {
        timerSeconds--;
        timerEl.textContent = "Time: " + timerSeconds;
// The seconds will decrease 1 per second, writing it to the timer element so the user can see as their time ticks down.
// If the time runs out the timer will be stopped and the time will be set back to 0 to avoid the highscore page from writing a negative number. The user will also be taken to the end page
        if (timerSeconds <= 0) {
            timerEl.textContent = "Time: 0";
            clearInterval(timer);
            started = false;
            questionsEl.setAttribute("style", "display: none;");
            endPageEl.setAttribute("style", "display: block;");
            timerSeconds = 0
        }
    }, 1000);
}

startButton.addEventListener("click", function() {
// If the timer is already started, end the function
    if (started) {
        return;
    }
// Otherwise, when the startButton is pressed it will hide the start page and reveal the questions <div> as well as invoke the countdown function to start the timer.
    timerSeconds = 60;
    startPageEl.setAttribute("style", "display: none;");
    questionsEl.setAttribute("style", "display: block;");
    started = true;
    countdown();
});

// The next 4 blocks of code are the event listeners for the 4 buttons on the questions page.
option1El.addEventListener("click", function() {

// Checks to see if the answer on the button corresponds to the answer for Question 2 if so, it runs the code to set up Question 3 by writing to the DOM using textContent, and tells the user they answered correctly.
    if (option1El.textContent === "1. Strings") {
        correctEl.textContent = "Correct!";
// Question 3
        questionh2El.textContent = "What can a variable consist of?";
        option1El.textContent = "1. Functions";
        option2El.textContent = "2. Arrays";
        option3El.textContent = "3. Booleans";
        option4El.textContent = "4. All of the above";
// If the answer doesn't match it tells the user that it's the wrong answer and subracts 15 seconds from the timer
    } else if (option1El.textContent !== "1. Strings") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    } 
// Set up option 1 as an aswer for question 4 as well. It is the last question, and will display the user the end page if answered correctly
    if (option1El.textContent === "1. Yes") {
        clearInterval(timer);
        questionsEl.setAttribute("style", "display: none;");
        endPageEl.setAttribute("style", "display: block;");
    }

});

option2El.addEventListener("click", function() {
// Checks to see if the answer on the button corresponds to the answer for the opening question if so, it runs the code to set up Question 2 by writing to the DOM using textContent, and tells the user they answered correctly.
    if (option2El.textContent === "2. Parenthesis") {
        correctEl.textContent = "Correct!";
// Question 2.
        questionh2El.textContent = "What data type is specified by quotations?";
        option1El.textContent = "1. Strings";
        option2El.textContent = "2. Numbers";
        option3El.textContent = "3. Booleans";
        option4El.textContent = "4. Objects";    
    } 
// If the answer doesn't match it tells the user that it's the wrong answer and subracts 15 seconds from the timer
        else if (option2El.textContent !== "2. Parenthesis") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    }
});

option3El.addEventListener("click", function() {
// Checks to see if the answer on the button corresponds to the answer for the last question, if so it leads the user to the end page, and ends the timer at it's current value.
    if (option3El.textContent === "3. Yes in green") {
        clearInterval(timer);
        started = false;
        questionsEl.setAttribute("style", "display: none;");
        endPageEl.setAttribute("style", "display: block;");
    } 
    // If the answer doesn't match it tells the user that it's the wrong answer and subracts 15 seconds from the timer
    else if (option3El.textContent !== "3. Yes in green") {
        wrongEl.textContent = "Wrong! Please try again!";
        timerSeconds = timerSeconds - 15;
    }
});

option4El.addEventListener("click", function() {
// Checks to see if the answer on the button corresponds to the answer for 3rd question if so, it runs the code to set up Question 4 by writing to the DOM using textContent, and tells the user they answered correctly.
    if (option4El.textContent === "4. All of the above") {
        correctEl.textContent = "Correct!";
// Question 4 has 2 acceptable answers, both yes responses in option 1 and option 3
        questionh2El.textContent = "Are arrays, functions, and expressions objects?";
        option1El.textContent = "1. Yes";
        option2El.textContent = "2. No";
        option3El.textContent = "3. Yes in green";
        option4El.textContent = "4. No in red";
        option1El.setAttribute ("style", "background-color: white;")
        option2El.setAttribute ("style", "background-color: white;")
        option3El.setAttribute ("style", "background-color: green;")
        option4El.setAttribute ("style", "background-color: red;")

    } 
// If the answer doesn't match it tells the user that it's the wrong answer and subracts 15 seconds from the timer
    else if (option4El.textContent !== "4. All of the above") {
        wrongEl.textContent = "Wrong! Please try again";
        timerSeconds = timerSeconds - 15;
    }
});

// The end button submits the name/initials entered and sets them to the local storage to be accessable on the highscores page. Clicking the button also takes the user to the High score page which will log the user name entered and their score.
endButton.addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.querySelector("#name-box").value;
    window.location.href = "./assets/highscores.html";
    localStorage.setItem("name", name);
    localStorage.setItem("score", timerSeconds);
});