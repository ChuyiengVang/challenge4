var questOne = {
    questn: "Question number 1",
    answer1: "answer",
    answer2: "answer",
    answer2: "answer",
    answer4: "answer"
}

var questTwo = {
    questn: "Question number 2",
    answer1: "answer",
    answer2: "answer",
    answer2: "answer",
    answer4: "answer"
}

var questThree = {
    questn: "Question number 3",
    answer1: "answer",
    answer2: "answer",
    answer2: "answer",
    answer4: "answer"
}

var questFour = {
    questn: "Question number 4",
    answer1: "answer",
    answer2: "answer",
    answer2: "answer",
    answer4: "answer"
}

var questFive = {
    questn: "Question number 5",
    answer1: "answer",
    answer2: "answer",
    answer2: "answer",
    answer4: "answer"
}


var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var counter = document.getElementById("count");
var startBtn = document.getElementById("start");
var questions = document.getElementById("questn");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

var timerCount = 100;

function quizStart(){

  var timerStart = setInterval(function() {
    timerCount--;
    counter.textContent = timerCount;

    if (timerCount <= 0) {
        clearInterval(timerStart);
    }

  }, 1000);

}

startBtn.addEventListener("click", quizStart)
