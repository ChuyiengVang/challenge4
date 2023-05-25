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
    question: "Which is the correct way to write a comment in JavaScript?",
    choices: ['{# ... #}', '<!--...-->', '// ....', '\\ ...'],
    answer: '// ....'
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
var buttonASelect = document.getElementById("bttn1");
var buttonBSelect = document.getElementById("bttn2");
var buttonCSelect = document.getElementById("bttn3");
var buttonDSelect = document.getElementById("bttn4");
var buttonA = document.getElementById("btn1");
var buttonB = document.getElementById("btn2");
var buttonC = document.getElementById("btn3");
var buttonD = document.getElementById("btn4");
var correctAns = document.getElementById("answer");
var scoreForm = document.getElementById("quizForm");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var hiScore = document.getElementById("highscore");
var hsList = document.getElementById("score-list");
var clearButton = document.getElementById("clearhsbtn");
var homeBtn = document.getElementById("backbtn");

//NEED FOR QUESTIONS TO RUN IN quizQuestns, starts at the first question
var currentQuestion = 0;
var timerCount = 75;
var timerStart
var savedScores = JSON.parse(localStorage.getItem("timedscores"));
var scoresList = [];
var myScore;

console.log();

//starts timer
function quizStart(){

    quiz.style.display = "block";
    challenge.style.display  = "none";

    timerStart = setInterval(function() {
    timerCount--;
    counter.textContent = timerCount;


    if (timerCount <= 0) {
        clearInterval(timerStart);
        yourScore();
    } 

  }, 1000);
     //invokes function quizQuestns to start
     quizQuestns();
}

function quizQuestns() {
                     //currentQuestion starts at set number, 0
    questions.textContent = quizQuestions[currentQuestion].question;
                      //choices[0] would choose the first string
    buttonA.textContent = quizQuestions[currentQuestion].choices[0];
    buttonB.textContent = quizQuestions[currentQuestion].choices[1];
    buttonC.textContent = quizQuestions[currentQuestion].choices[2];
    buttonD.textContent = quizQuestions[currentQuestion].choices[3];
} 

function choosenAnswer(answer) {

    if (quizQuestions[currentQuestion].answer !== quizQuestions[currentQuestion].choices[answer]) {
        timerCount -= 10;
        counter.textContent = timerCount;
        correctAns.textContent = "Incorrect!!"
    } else {
        correctAns.textContent = "10 Points to Gryffindor!!!"
    }
    //currentQuestion++ goes to next question/object in order
    currentQuestion++;
    if (quizQuestions.length > currentQuestion) {
        quizQuestns()
    } else {
    //stops the current timer where it's at
        clearInterval(timerStart);
        yourScore();

    }
}

console.log();

function yourScore() {
    
    quiz.style.display = "none";
    scoreForm.style.display = "block";

    score.textContent = timerCount;

}

function highScoreScreen(event) {
    event.preventDefault();

    savedScores = JSON.parse(localStorage.getItem("timedscores"));

    myScore = {
        myInitials: initials.value,
        myScore: timerCount
    }

    if(savedScores === null) {
        scoresList;
    } else {
        scoresList = savedScores
    }

    scoresList.push(myScore);

    localStorage.setItem("timedscores", JSON.stringify(scoresList));


    location.href="highscores.html";

}

startBtn.addEventListener("click", quizStart);

buttonASelect.addEventListener("click", function buttonA() {
    choosenAnswer(0);
});
buttonBSelect.addEventListener("click", function buttonB() {
    choosenAnswer(1);
});
buttonCSelect.addEventListener("click", function buttonC() {
    choosenAnswer(2);
});
buttonDSelect.addEventListener("click", function buttonD() {
    choosenAnswer(3);
});
submitBtn.addEventListener("click",highScoreScreen);


