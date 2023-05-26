var hiScore = document.getElementById("highscore");
var hsList = document.getElementById("score-list");
var clearButton = document.getElementById("clearhsbtn");
var homeBtn = document.getElementById("backbtn");

var yourIntScore = JSON.parse(localStorage.getItem("timedscores"));


//toDO before we loop, need to sort youintscore, largest to smallest
var sortScores = yourIntScore.sort(function(a, b){
    return a-b
  });

  console.log(sortScores);

for (var i = 0; i < yourIntScore.length; i++){
    
    var newScores = document.createElement("li");

    newScores.textContent = yourIntScore[i].myInitials + ": " + yourIntScore[i].myScore;

    hsList.appendChild(newScores);
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