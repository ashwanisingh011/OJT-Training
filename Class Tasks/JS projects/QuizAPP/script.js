let score = 0;

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django"
  }
];

let currentQuestionIndex = 0;

function loadQuestion () {
    const currentQuestion = questions[currentQuestionIndex]
    document.getElementById("question").innerText = currentQuestion.question;

    const optionDiv = document.getElementById("options");
    optionDiv.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button")
        btn.innerText = option;

        btn.addEventListener("click", ()=>{
            checkAnswer(option, btn)
        })

        optionDiv.appendChild(btn);
    })

}
loadQuestion();
function checkAnswer(selectOption, clickedButton){
    const correctAnswer = questions[currentQuestionIndex].answer;
    const allButtons = document.querySelectorAll("#options button");

    allButtons.forEach(button => button.disabled = true);

    if(selectOption === correctAnswer){
        score++;
        clickedButton.style.backgroundColor = "green";
        clickedButton.style.color = "red";
    }else{
        clickedButton.style.backgroundColor = "red";
        clickedButton.style.color = "white";


        allButtons.forEach(button => {
            if(button.innerText == correctAnswer){
                button.style.backgroundColor = "green";
                button.style.color = "white"
            }
        });
    }
}

document.getElementById("nextBtn").addEventListener("click", ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
    }else{
        showResult()
    }
});

function showResult(){
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = 
    `<h2>Quiz Completed</h2> <p>Score ${score}/${questions.length}</p>`;
}

