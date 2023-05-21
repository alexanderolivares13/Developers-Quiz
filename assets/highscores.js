var tableLine1 = document.querySelector("#line-1");
var gobackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");

function renderHighscore () {
    var number1 = localStorage.getItem("score");
    var score1 = localStorage.getItem("name");
    tableLine1.textContent = score1 + " - " + number1;
}

renderHighscore()

clearButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("name", "");
    localStorage.setItem("score", "");
    tableLine1.textContent = "";
})

gobackButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = ("../index.html")
})