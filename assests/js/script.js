var questOne = {
    questn: "This is Question number 1",
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct: "answer1"
}

var questTwo = {
    questn: "Question number 2",
    answer1: "answer",
    answer2: "answer",
    answer3: "answer",
    answer4: "answer"
}

var questThree = {
    questn: "Question number 3",
    answer1: "answer",
    answer2: "answer",
    answer3: "answer",
    answer4: "answer"
}

var questFour = {
    questn: "Question number 4",
    answer1: "answer",
    answer2: "answer",
    answer3: "answer",
    answer4: "answer"
}

var questFive = {
    questn: "Question number 5",
    answer1: "answer",
    answer2: "answer",
    answer3: "answer",
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
var answer = document.getElementById("answer");

var timerCount = 100;


//starts timer
function quizStart(){

  var timerStart = setInterval(function() {
    timerCount--;
    counter.textContent = timerCount;

    if (timerCount <= 0) {
        clearInterval(timerStart);
    }

  }, 1000);
  //invokes function questions
 quizQuestns();
}

function quizQuestns() {
    questions.textContent = questOne.questn;
    button1.textContent = questOne.answer1;
    button2.textContent = questOne.answer2;
    button3.textContent = questOne.answer3;
    button4.textContent = questOne.answer4
}

function correctAnswer() {

    if (questOne.correct === questOne.answer1){
        answer.textContent = "Correct";
    } else if (questOne.answer2 && questOne.answer3 && questOne.answer4){
        timerCount -= 10;
        counter.textContent = timerCount;
        answer.textContent = "Incorrect";
    }
}

console.log(correctAnswer)
function pickAnswer1() {
  correctAnswer()
}

startBtn.addEventListener("click", quizStart)
button1.addEventListener("click", pickAnswer1)
//button2.addEventListener("click",)
//button3.addEventListener("click",)
//button4.addEventListener("click",)