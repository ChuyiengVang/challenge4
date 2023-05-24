var hiScore = document.getElementById("highscore");
var hsList = document.getElementById("score-list");
var clearButton = document.getElementById("clearhsbtn");
var homeBtn = document.getElementById("backbtn");
var newScores = document.createElement("li");

var yourIntScore = JSON.parse(localStorage.getItem("timedscores"));

hsList.appendChild(newScores);

function SavedHighScores() {

for (var i = 0; i < yourIntScore.length; i++) {

    newScores.textContent = yourIntScore[i].initialEntered + ": " +yourIntScore[i].scored;

console.log(newScores);
}
}

homeBtn.addEventListener("click", function homeScreen(event){
    event.stopPropagation();
    location.href="index.html";
});

clearButton.addEventListener("click", function eraseScores(){

    var deleteHistory = confirm("Do you wish to delete all scores?");

    if(deleteHistory) {
    localStorage.removeItem("timedscores");
    }
})

SavedHighScores()