var tableLine1 = document.querySelector("#line-1");
var gobackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");

// Declaring the function that will run on page load. The number1 and score1 variable will get the score and name of the user that was saved into the local data from the main page and display them.
function renderHighscore () {
    var number1 = localStorage.getItem("score");
    var score1 = localStorage.getItem("name");
    tableLine1.textContent = score1 + " - " + number1;
}

renderHighscore()
// The clearButton will set the local storage to nothing and will clear the highscore shown on the page
clearButton.addEventListener("click", function() {
    localStorage.setItem("name", "");
    localStorage.setItem("score", "");
    tableLine1.textContent = "";
})
// The gobackButton will take the user back to the main index page and will let them answer the questions again.
gobackButton.addEventListener("click", function() {
    window.location.href = ("../index.html");
})