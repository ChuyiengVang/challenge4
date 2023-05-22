var quizQuestions = [
{
   question: "Which is NOT a JavaScript date type?",
   choices: ['Pickles', 'Strings','Booleans', 'Integers'],
   answer: 'Pickles'
},
{
    question: "Arrays can be used to store?",
    choices: ['Numbers and Strings', 'Booleans', 'Arrays', 'All the above'],
    answer: 'All the above'
},
{
    question: "Commonly used data types DO NOT inlcude:",
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    answer: 'Alerts'
},
{
    question: "JavaScript is a _______ language?",
    choices: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
    answer: 'Object-Oriented'
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ['var', 'let', 'Both A and B', 'None of the above'],
    answer: 'Both A and B'
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    choices: ['getElement()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
    answer: 'Both A and B'
},
{
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
    answer: 'stringify()'
},
]

console.log()

var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var counter = document.getElementById("count");
var startBtn = document.getElementById("start");
var challenge = document.getElementById("challenge");
var quiz = document.getElementById("quiz");
var questions = document.getElementById("questn");
var buttonA = document.getElementById("btn1");
var buttonB = document.getElementById("btn2");
var buttonC = document.getElementById("btn3");
var buttonD = document.getElementById("btn4");
var answer = document.getElementById("answer");
var score = document.getElementById("score");
var submitBtn = document.getElementById("submit");

//NEED FOR QUESTIONS TO RUN IN quizQuestns, starts at the first question
var questionIndex = 0;
var timerCount = 75;


//starts timer
function quizStart(){

    quiz.style.display = "block";
    challenge.style.display  = "none";

  var timerStart = setInterval(function() {
    timerCount--;
    counter.textContent = timerCount;

    if (timerCount <= 0) {
        clearInterval(timerStart);
    }

  }, 1000);
  //invokes function quizQuestns to start
 quizQuestns();
}

function quizQuestns() {
  questions.textContent = quizQuestions[questionIndex].question;
  buttonA.textContent = quizQuestions[questionIndex].choices[0];
  buttonB.textContent = quizQuestions[questionIndex].choices[1];
  buttonC.textContent = quizQuestions[questionIndex].choices[2];
  buttonD.textContent = quizQuestions[questionIndex].choices[3];
} 

function correctAnswer() {

}

console.log(quizQuestions[questionIndex].question)

startBtn.addEventListener("click", quizStart)