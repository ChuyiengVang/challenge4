var hiScore = document.getElementById("highscore");
var hsList = document.getElementById("score-list");
var clearButton = document.getElementById("clearhsbtn");
var homeBtn = document.getElementById("backbtn");
var newScores = document.createElement("li");

var yourIntScore = JSON.parse(localStorage.getItem("timedscores"));

hsList.appendChild(newScores);

function SavedHighScores() {

for (var i = 0; i < yourIntScore.length; i++) {

    newScores.textContent = yourIntScore[i].myInitials + ": " + yourIntScore[i].myScore;

console.log();
}
}

homeBtn.addEventListener("click", function homeScreen(){
    location.href="index.html";
});

clearButton.addEventListener("click", function eraseScores(){

    var deleteHistory = confirm("Do you wish to delete all scores?");

    if(deleteHistory) {
    localStorage.removeItem("timedscores");
    }
})

SavedHighScores()