var hiScore = document.getElementById("highscore");
var hsList = document.getElementById("score-list");
var clearButton = document.getElementById("clearhsbtn");
var homeBtn = document.getElementById("backbtn");
var newScores = document.createElement("li");

var yourIntScore = JSON.parse(localStorage.getItem("timedscores"));

    for (var i = 0; i < localStorage.length; i++){

       
        if((localStorage.key(i).indexOf("timedscores")) !== -1){
        
          newScores.textContent = (localStorage.getItem(localStorage.key(i)));
          
          hsList.appendChild(newScores);
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