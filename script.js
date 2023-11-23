const questions = [
    {
        question: "How many times have India won ODI World Cup?",
        answers: [
            { text: "one", correct: false},
            { text: "three", correct: false},
            { text: "two", correct: true},
            { text: "four", correct: false},

        ]
    },
    {
        question: "Full form of ICC is?",
        answers: [
            { text: "India Cricket Council", correct: false},
            { text: "International Cricket Council", correct: true},
            { text: "International Cricket Committee", correct: false},
            { text: "Intercontinental Cricket Corporation", correct: false},

        ]
    },
    {
        question: " Which player among the following earned the title of the “Player of the Tournament” in the ICC Cricket World Cup 2023?",
        answers: [
            { text: "Mohammed Shami", correct: false},
            { text: "Virat Kohli", correct: true},
            { text: "Quinton de Kock", correct: false},
            { text: "Glenn Maxwell", correct: false},

        ]
    },
    {
        question: "Which country has won the most Cricket World Cups?",
        answers: [
            { text: "England", correct: false},
            { text: "Pakistan", correct: false},
            { text: "India", correct: false},
            { text: " Australia", correct: true},

        ]
    },
    {
        question: "Who captained India to victory in the 1983 Cricket World Cup?",
        answers: [
            { text: "Kapil Dev", correct: true},
            { text: "Rohit Sharma", correct: false},
            { text: "Virat Kohli", correct: false},
            { text: "MS Dhoni", correct: false},

        ]
    },
    {
        question: "Which of these countries has never won the Cricket World Cup?",
        answers: [
            { text: "England", correct: false},
            { text: "South Africa", correct: true},
            { text: "West Indies", correct: false},
            { text: "India", correct: false},

        ]
    },
    {
        question: " Who was awarded the Player of the Match in the final of the ICC Cricket World Cup 2023?",
        answers: [
            { text: "Mitchell Marsh", correct: false},
            { text: "Travis Head", correct: true},
            { text: "Glenn Maxwell", correct: false},
            { text: "David Warner", correct: false},

        ]
    },
    {
        question: "Who is called the God of Cricket",
        answers: [
            { text: "MS Dhoni", correct: false},
            { text: "Virat Kohli", correct: false},
            { text: "Rohit Sharma", correct: false},
            { text: "Sachin Tendulkar", correct: true},

        ]
    },
    {
        question: "How many overs are played in IPL?",
        answers: [
            { text: "25", correct: false},
            { text: "50", correct: false},
            { text: "40", correct: false},
            { text: "20", correct: true},

        ]
    },
    {
        question: "which year india has won t20 world cup?",
        answers: [
            { text: "2011", correct: false},
            { text: "1983", correct: false},
            { text: "2007", correct: true},
            { text: "2000", correct: false},

        ]
    },
]
const question =  document.getElementById("question");
const answerBtns =  document.getElementById("answer-btns");
const nextBtn =  document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    let currentQuestionIndex = 0;
    let score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex + 1;
    question.innerHTML = QuestionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((ans)=>{
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerBtns.append(button);
        if(ans.correct){
            button.dataset.correct =ans.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    // We have to disable the click after selecting one answer and when we select the wrong answer, it will automatically highlight the correct answer with the green color.
    Array.from(answerBtns.children).forEach((button)=>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}
function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length} !` 
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = block;
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        // suppose if there is no questions and we click the next button then it will restart the quiz
        startQuiz();
    }
})

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}
startQuiz();